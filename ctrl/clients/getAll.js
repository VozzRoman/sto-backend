import asyncHeandler from "express-async-handler";
import createErrors from "http-errors";
import { ClientsModel } from "../../models/clientsModel.js";

const getAllClients = asyncHeandler(async(req, res) => {
	const clients = await ClientsModel.find({}).sort({ createdAt: -1 });
	if(!clients){
		createErrors(400, "no clients found")
	}
	 return res.json(clients);
})


export default getAllClients;