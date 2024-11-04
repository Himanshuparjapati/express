import mongoose from "mongoose"
import { DB_URL } from "./Servercofig.js"

export default async function connectDB(params) {
    try {
        await mongoose.connect(DB_URL)
        console.log("connect to MongoDB");
        
    } catch (error) {
        console.log("Something Went Wrong ");
        console.log(error);  
    }
}