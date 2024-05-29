import asyncHeandler from "express-async-handler";
import createErrors from "http-errors";
import { isValidObjectId } from "mongoose";
import { TireStoreModel } from "../../models/tireStoreModel.js";

const removeTires = asyncHeandler(async(req, res) => {
	const {id} = req.params
	if(!isValidObjectId(id)){
		throw createErrors(400, 'invalid id')
	}
	const tire = await TireStoreModel.findByIdAndDelete(id);
	if(!tire){
		createErrors(400, "no tire found")
	}
	 return res.json(tire)
})


export default removeTires;