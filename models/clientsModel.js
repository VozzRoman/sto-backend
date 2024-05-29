import {Schema, model} from 'mongoose';

const  Tire = new Schema({
	width: { type: String, required: false },
	height: { type: String, required: false },
	radius: { type: String, required: false }
 });

const clientsSchema = new Schema({
	name:{type: String, required: false},
	age: {type: String, required: false},
	// whoAddClient: {type: String, required: false},
	// registrationNumber_1: {type: String, required: false},
	// registrationNumber_2: {type: String, required: false},
	// tire_1: Tire,
	// tire_2: Tire,
	// carModel_1: {type: String, required: true},
	// carModel_2: {type: String, required: false},
	// phone_1: {type: String, required: false},
	// phone_2: {type: String, required: false},
	// phone_3: {type: String, required: false},
	// name: {type: String, required: false},
	// tiresValue: {type: String, required: false},
	// tiresValue_2: {type: String, required: false},
	// tiersIssueYears: {type: String, required: false},
	// character: {type: String, required: false},
	// carFlaws: {type: String, required: false},
	// tireFlawStore: {type: String, required: false},
	// dataStorage: {type: String, required: false},
	// tireBrend: {type: String, required: false},
	// tireStorage: Tire,
	// tireStorage_2: Tire,
	// serviceCar_1: {type: [String], required: false},
	// serviceCar_2: {type: [String], required: false},
	// endDataStorage: {type: String, required: false},
	// discount: {type: String, required: false},

},
{versionKey: false, timeseries: false}
);

export const ClientsModel = model('client', clientsSchema );