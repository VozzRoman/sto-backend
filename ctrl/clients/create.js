import asyncHeandler from "express-async-handler";
import createErrors from "http-errors";
import { ClientsModel } from "../../models/clientsModel.js";

const createClients = asyncHeandler(async(req, res) => {
	const client = req.body;
	// if(!clients){
	// 	createErrors(400, "no clients found")
	// }
	 return res.json({
		code: 200,
		staus:'ok',
		data: client
	})
})


export default createClients;
