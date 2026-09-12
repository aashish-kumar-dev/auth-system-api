import 'dotenv/config';// alwats use this dotenv
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import userRouter from "./Routes/user.routes.js";


const app = express();
const port = process.env.PORT || 5000;
await connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials:true}));

app.get("/", (req,res)=>{
    res.send("API working properly")
})

app.use("/api/user", userRouter);


app.listen(port, ()=>{
console.log(`Server Running on port: ${port}`);
})
