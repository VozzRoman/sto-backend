import asyncHeandler from "express-async-handler";
import createErrors from "http-errors";
import { ClientsModel } from "../../models/clientsModel.js";
import { isValidObjectId } from "mongoose";
const updateClients = asyncHeandler(async(req, res) => {
	const {id} = req.params;
	if(!isValidObjectId(id)){
		throw createErrors(400, "invalid id");
	}
	console.log('req', req.body);
	const client = await ClientsModel.findByIdAndUpdate(id, {...req.body}, {new: true, runValidators: true});
	console.log("clientsUpdate", client);
	if(!client){
		throw createErrors(400, "no clients found")
	}
	 return res.json(client)
})


export default updateClients;