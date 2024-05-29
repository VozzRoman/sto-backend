import {Schema, model} from 'mongoose';

const  Tire = new Schema({
	width: { type: String, required: true },
	height: { type: String, required: true },
	radius: { type: String, required: true }
 }, { _id: false, id: false });

const soldTireSchema = new Schema({
	tireModel: {type: String, required: false},
	tireBrend: {type: String, required: false},
	tireSize: Tire,
	counts: { type: Schema.Types.Mixed, required: false},
	outPrice: { type: Schema.Types.Mixed, required: true},
	revenue: { type: Schema.Types.Mixed, required: true},
	soldData: {type: String, required: false},


},
{versionKey: false, timeseries: false}
);

export const SoldTireModel = model('soldTire', soldTireSchema);