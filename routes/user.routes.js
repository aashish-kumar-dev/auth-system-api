import express from "express";
import {getUser, login, logout, register, resetPassword, sendResetOtp, sendVerifyOtp, verifyEmail } from "../controllers/user.controller.js";
import userAuth from "../middlewares/user.middleware.js";

const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post("/login", login);


userRouter.post('/send-verify-otp', sendVerifyOtp);
userRouter.post('/verify-email', verifyEmail);
userRouter.post('/send-reset-otp', sendResetOtp);
userRouter.post('/reset-password', resetPassword);
userRouter.get('/get-user', userAuth, getUser);
userRouter.post("/logout", userAuth, logout);


export default userRouter;