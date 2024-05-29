import asyncHeandler from "express-async-handler";
import createErrors from "http-errors";
import { isValidObjectId } from "mongoose";
import { TireStoreModel } from "../../models/tireStoreModel.js";
const findByTire = asyncHeandler(async(req, res) => {
	const {id} = req.params;
	if(!isValidObjectId(id)){
		throw createErrors(400, "invalid id");
	}
	const tire = await TireStoreModel.findById(id);
	if(!tire){
		throw createErrors(400, "no tires found")
	}
	 return res.json(tire)
})
export default findByTire;