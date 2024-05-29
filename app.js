import express from "express";
import morgan from "morgan";
import dotenv from 'dotenv';
import cors from 'cors';
import clientsRoute from './routes/clientsRoute.js';
import connection from "./database.js";


dotenv.config();

const app = express();

const logger = process.env === "development" ? "dev" : "short";


// const tireStore = [];
// const soldTire = [];

app.use(morgan(logger));
app.use(express.json());
app.use(cors());

app.use("/api/clients", clientsRoute);
// app.use("/api/tireStore", tireStore);
// app.use("/api/clients", soldTire);




app.use((req, res) => {
	res.status(404).json({message: "не вірний маршрут"});
})


connection();

app.listen(8080, () => console.log('server is run'));