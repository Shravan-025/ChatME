import mongoose from "mongoose";
import "dotenv/config"

export async function connectDB(){
    try{
        const mongoURL = process.env.MONGO_URL;
        if(!mongoURL){
            throw new Error("MONGO_URL is requied");
        }

        const connect = await mongoose.connect(mongoURL);

        console.log("MongoDB connected", connect.connection.host);
    }
    catch(error){
        console.error("MongoDB connection error:",error.message);
        process.exit(1);
    }
}