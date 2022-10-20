import mongoConection from "src/utils/ConnectionMongoDB";
import EventsModel from 'src/models/Events';

mongoConection();

type EventType = {
    name: String;
    description: String;
}

let EventsController = {
    getEvents: async () => {
        const events = await EventsModel.find({});
        return events;
    },
    postEvent: async (eventToCreate: EventType) => {
        const newEvent = await EventsModel.create(eventToCreate);
        return newEvent;
    }


}

export default EventsController;