import asyncHeandler from "express-async-handler";
import createErrors from "http-errors";
import { SoldTireModel } from "../../models/soldTireModel.js";

const getAllSoldTires = asyncHeandler(async(req, res) => {
	const soldTires = await SoldTireModel.find({});
	if(!soldTires){
		createErrors(400, "no soldTire found")
	}
	 return res.json(soldTires);
})


export default getAllSoldTires;