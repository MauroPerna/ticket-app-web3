import type { NextApiRequest, NextApiResponse } from 'next';
import EventsController from 'src/controllers/Events';

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
    let {
        method,
        query: {},
        body: {name, description},
    } = req;

    try {
        switch(method) {
            case 'GET': {
                const events = await EventsController.getEvents();
                return res.status(200).json({status:"success", data: events})
            }
            case 'POST': {
                const event = await EventsController.postEvent({name, description})
                return res.status(200).json({status:"success", data: event})
            }
        }
    } catch (error) {
        res.status(404).json({ status: "error", msg: "Method unsuported" });
    }
}
