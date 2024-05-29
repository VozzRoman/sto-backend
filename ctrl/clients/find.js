import asyncHeandler from "express-async-handler";
import createErrors from "http-errors";
import { ClientsModel } from "../../models/clientsModel.js";
import { isValidObjectId } from "mongoose";
const findByClients = asyncHeandler(async(req, res) => {
	const {id} = req.params;
	if(!isValidObjectId(id)){
		throw createErrors(400, "invalid id");
	}
	const client = await ClientsModel.findById(id);
	
	if(!client){
		throw createErrors(400, "no clients found")
	}
	 return res.json(client)
})


export default findByClients;