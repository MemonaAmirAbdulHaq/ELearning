import { app } from "./app";
require("dotenv").config();
import connectDB from './utils/db' 
import { v2 as cloudinary } from "cloudinary";
// Cloudinary Configuration
cloudinary.config({
cloud_name: process.env.CLOUD_NAME as string,
 api_key: process.env.CLOUD_API_KEY  as string,
 api_secret: process.env.CLOUD_SECRET_KEY  as string,
});


app.listen(process.env.PORT,()=>{
    console.log(`Server is connected with port ${process.env.PORT} `);
    connectDB();
    
})