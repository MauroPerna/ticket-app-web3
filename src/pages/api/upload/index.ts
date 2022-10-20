import type { NextApiRequest, NextApiResponse } from 'next';
import EventsController from 'src/controllers/Events';
import nc from 'next-connect';
import multer from 'multer';
import path from 'path';


const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "img");
        },
        filename: (req, file, cb) => cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname)),
    }),
});

const handler = nc({
    onError: (err, req: NextApiRequest, res: NextApiResponse, next) => {
        err.statusCode = err.statusCode || 500;
        let error = { ...err };
        error.message = err.message;
        res.status(err.statusCode).json({
          error,
          message: error.message,
          stack: error.stack,
        });
    },
})

const uploadMiddleware = upload.single('file');
handler.use(uploadMiddleware);


handler.post(async (req, res) => {
    let {
        query: { },
        body: { name, description },
    } = req;

    let filename = req.file.filename;
    console.log(req.file);
    return res.status(200).json({ status: "success", data: filename })
    // const event = await EventsController.postEvent({ name, description })
    // return res.status(200).json({ status: "success", data: event })
})

export default handler;

export const config = {
    api: {
      bodyParser: false, // Disallow body parsing, consume as stream
    },
};