import { prop, getModelForClass } from '@typegoose/typegoose';

class Events {
    
    @prop({ type: () => String })
    public name?: String;

    @prop({ type: () => String })
    public description?: String;

    @prop({ type: () => Date, default: Date.now() })
    public createdAt?: Date;

}

const EventsModel = getModelForClass(Events);

export default EventsModel;