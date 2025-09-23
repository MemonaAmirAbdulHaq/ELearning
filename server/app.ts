
import { ErrorMiddleware } from './middleware/error';
require('dotenv').config();
import express, { NextFunction, Request, Response } from 'express';
export const app=express()
import cors from 'cors'
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.route'
import courseRouter from './routes/course.route';
import orderRouter from './routes/order.route';
import notificationRoute from './routes/notification.route';
import analyticsRouter from './routes/analytics.route';
import layoutRouter from './routes/layout.route';
//body parser
app.use(express.json({ limit: "50mb"}));

app.use(cookieParser());
const allowedOrigin = process.env.ORIGIN?.trim();
//cors=>cross origin resource sharing
app.use(cors({
    origin: allowedOrigin,
  credentials: true,

}));
//route
app.use("/api/v1",userRouter)
app.use("/api/v1",courseRouter)
app.use("/api/v1",orderRouter)
app.use("/api/v1",notificationRoute)
app.use("/api/v1",analyticsRouter)
app.use("/api/v1",layoutRouter)





//testing api
app.get("/test",(req:Request,res:Response,next:NextFunction)=>{
     res.status(200).json({
        success:true,
        message:"Api is working",
     });
});

//unknown routes
app.all(/.*/, (req:Request,res:Response,next:NextFunction)=>{
  const err=new Error(`Route ${req.originalUrl} not found`) as any;
  err.statusCode=404;
  next(err)
});

app.use(ErrorMiddleware);