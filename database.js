import mongoose from "mongoose";

const connection = async () => {
	try {
	const DB = await mongoose.connect(process.env.MONGO_URL);
	console.log(`MongoDB is connected. Name ${DB.connection.name}. Port ${DB.connection.port}`);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

export default connection;