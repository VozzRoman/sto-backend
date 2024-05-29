import asyncHeandler from "express-async-handler";
import createErrors from "http-errors";
import { SoldTireModel } from "../../models/soldTireModel.js";

const addSoldTire = asyncHeandler(async(req, res) => {
	
	const soldTire = await SoldTireModel.create(req.body);
	
	if(!soldTire){
		throw createErrors(500, "faild to create client")
	}
	 return res.json(soldTire);
})


export default addSoldTire;