import {Schema, model} from 'mongoose';

const  Tire = new Schema({
	width: { type: String, required: true },
	height: { type: String, required: true },
	radius: { type: String, required: true }
 }, { _id: false, id: false });

const tireStoreSchema = new Schema({
	whoAddClient: {type: String, required: false},
	tireModel: {type: String, required: true},
	tireBrend: {type: String, required: true},
	issueYear: {type: String, required: true},
	counts: { type: Schema.Types.Mixed, required: true},
	inPrice: { type: Schema.Types.Mixed, required: true},
	outPrice: { type: Schema.Types.Mixed, required: true},
	tireNotes: {type: String, required: false},
	clientName: {type: String, required: false},
	clientPhone: {type: String, required: false},
	loadIndex: {type: String, required: true},
	dealDate: {type: String, required: false},
	tireSize: Tire,
	tireSpeed: {type: String, required: true},
	tireOwner: {type: String, required: false},
	rating: {type: String, required: true},


},
{versionKey: false, timeseries: false}
);

export const TireStoreModel = model('tire', tireStoreSchema);