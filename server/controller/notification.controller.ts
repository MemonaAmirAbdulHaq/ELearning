import cron from 'node-cron';

import { CatchAsyncError } from './../middleware/catchAsyncError';
import NotificationModel from "../models/notification.Model";
import { NextFunction,Request,Response } from "express";

import ErrorHandler from "../utils/ErrorHandler";
//get all notify only admin
export const getNotifications= CatchAsyncError(async(req:Request,res:Response,next:NextFunction)=>{
try {
    const notifications=await NotificationModel.find().sort({createdAt: -1});
    res.status(201).json({
        success:true,
        notifications
    })
} catch (error:any) {
    return next(new ErrorHandler(error.message,500))
}
});

//update notficato only by admin
export const updateNotification=CatchAsyncError(async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const notification=await NotificationModel.findById(req.params.id);
        if(!notification){
            return next(new  ErrorHandler("notification not found",404))
        } else{
                    notification.status ? notification.status ='read' : notification?.status;
        }
        await notification.save();
        const notifications=await NotificationModel.find().sort({
            cratedAt:-1,
        });
        res.status(201).json({
            success:true,
            notifications,
        })
                   
    } catch (error:any) {
    return next(new ErrorHandler(error.message,500))
        
    }
});

//delete notification = only dmin
cron.schedule("0 0 0 * * *",async()=>{
    const  thirtyDayAgo=new Date(Date.now()-30 * 24 * 60 *60 * 1000);
    await NotificationModel.deleteMany({status:"read",createdAt:{$lt:thirtyDayAgo}});
    console.log("delete read notification")
})