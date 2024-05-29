import asyncHeandler from "express-async-handler";
import createErrors from "http-errors";
import { isValidObjectId } from "mongoose";
import { SoldTireModel } from "../../models/soldTireModel.js";

const removeSoldTire = asyncHeandler(async(req, res) => {
	const {id} = req.params
	if(!isValidObjectId(id)){
		throw createErrors(400, 'invalid id')
	}
	const soldTire = await SoldTireModel.findByIdAndDelete(id);
	if(!soldTire){
		createErrors(400, "no clients found")
	}
	 return res.json(soldTire)
})


export default removeSoldTire;