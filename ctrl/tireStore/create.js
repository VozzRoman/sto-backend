import asyncHeandler from "express-async-handler";
import createErrors from "http-errors";
import { TireStoreModel } from "../../models/tireStoreModel.js";

const createTire = asyncHeandler(async(req, res) => {
	
	const tire = await TireStoreModel.create(req.body);
	if(!tire){
		throw createErrors(500, "faild to create tire in store")
	}
	 return res.json(tire)
})


export default createTire;