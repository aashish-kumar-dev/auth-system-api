import jwt from "jsonwebtoken";
import User from "../models/user.model.js";


const userAuth = async(req, res, next) =>{
     console.log("=== userAuth middleware hit ===");
    console.log("cookies:", req.cookies);
    const {token} = req.cookies;
     console.log("token:", token);

    if(!token){
        return res.status(400).json({
            success: false, 
            message: 'Not Authorized, Login Again'
        })
    }

    try {
        
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        console.log("decodeeeee",tokenDecode);
        console.log("decodeeId", tokenDecode.id);

        if(!tokenDecode.id){
             return res.status(400).json({success: false, message: 'Not Authorized'})
        }

         req.userId = tokenDecode.id;
         console.log("userIddddd",req.userId);
        
        next();

    } catch (error) {
        return res.status(500).json({success: false, message: error.message});
    }
}

export default userAuth;
