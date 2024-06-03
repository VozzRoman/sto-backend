import express from "express";
import morgan from "morgan";
import dotenv from 'dotenv';
import cors from 'cors';
import clientsRoute from './routes/clientsRoute.js';
import tireStore from './routes/tireStoreRoute.js';
import soldTires from './routes/soldTireRoute.js';
import connection from "./database.js";


dotenv.config();

const app = express();

const logger = process.env === "development" ? "dev" : "short";

const allowedOrigins = ['https://wheels-car-service.netlify.app,  http://localhost:5174'];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['Access-Control-Allow-Origin'],
};



app.use(morgan(logger));
app.use(express.json());
app.use(cors(corsOptions));




app.use("/api/clients", clientsRoute);
app.use("/api/tiresStore", tireStore);
app.use("/api/soldTires", soldTires);




app.use((req, res) => {
	res.status(404).json({message: "не вірний маршрут"});
})

app.use((err, req, res, next) => {
	console.error(err); // Выводите ошибку в консоль для дополнительной диагностики
	res.status(err.status || 500).json({ error: err.message });
 });

connection();

app.listen(8080, () => console.log('server is run'));