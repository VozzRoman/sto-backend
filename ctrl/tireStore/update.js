import asyncHeandler from "express-async-handler";
import createErrors from "http-errors";
import { isValidObjectId } from "mongoose";
import { TireStoreModel } from "../../models/tireStoreModel.js";
const updateTire = asyncHeandler(async(req, res) => {
	const {id} = req.params;
	if(!isValidObjectId(id)){
		throw createErrors(400, "invalid id");
	}
	console.log('req', req.body);
	const tire = await TireStoreModel.findByIdAndUpdate(id, {...req.body}, {new: true, runValidators: true});
	if(!tire){
		throw createErrors(400, "no tire found")
	}
	 return res.json(tire)
})


export default updateTire;