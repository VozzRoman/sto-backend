import asyncHeandler from "express-async-handler";
import createErrors from "http-errors";
import { TireStoreModel } from "../../models/tireStoreModel.js";

const getAllTires = asyncHeandler(async(req, res) => {
	const tires = await TireStoreModel.find({});
	if(!tires){
		createErrors(400, "no tires found")
	}
	 return res.json(tires);
})

export default getAllTires;