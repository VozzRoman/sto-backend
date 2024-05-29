import asyncHeandler from "express-async-handler";
import createErrors from "http-errors";
import { ClientsModel } from "../../models/clientsModel.js";

const createClients = asyncHeandler(async(req, res) => {
	
	const client = await ClientsModel.create(req.body);
	console.log("Client", client);
	if(!client){
		throw createErrors(500, "faild to create client")
	}
	 return res.json(client)
})


export default createClients;
