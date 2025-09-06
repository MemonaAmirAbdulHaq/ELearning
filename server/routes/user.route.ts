import { isAutheticated } from './../middleware/auth';
import express from "express";
import { activateUser, getUserInfo, loginUser, logoutUser, registrationUser, socialAuth, updateAccessToken, updatePassword, updateProfilePicture, updateUserInfo } from "../controller/user.controller";
const userRouter=express.Router();
userRouter.post("/registration",registrationUser);
userRouter.post("/activate-user",activateUser);
userRouter.post("/login",loginUser);
userRouter.get("/logout",isAutheticated,logoutUser); //, authorizeRoles("admin")
userRouter.get("/refresh",updateAccessToken);
userRouter.get("/me",isAutheticated,getUserInfo);
userRouter.post("/social-auth",socialAuth);
userRouter.put("/update-user-info",isAutheticated,updateUserInfo);
userRouter.put("/update-user-password",isAutheticated,updatePassword);
userRouter.put("/update-user-avatar",isAutheticated,updateProfilePicture);









export default userRouter;