import asyncHeandler from "express-async-handler";
import createErrors from "http-errors";
import { ClientsModel } from "../../models/clientsModel.js";

const updateClients = asyncHeandler(async(req, res) => {
	// const clients = await ClientsModel.find({});
	// if(!clients){
	// 	createErrors(400, "no clients found")
	// }
	 return res.json({
		code: 200,
		staus:'ok',
		meassage: 'updateClient'
	})
})


export default updateClients;