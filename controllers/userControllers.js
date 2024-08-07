const asyncHandler= require("express-async-handler");
const User=require("../models/userModel");
const bcrypt = require ("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser=asyncHandler(async (req,res)=>{
    const {username,email,password}=req.body;
    if(!username||!email||!password){
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    //checking if same email already exists, passing email as object
    const userAvailable= await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("User already registered")
    }
    //we have to store the req password into hash password to store in db
    const hashedPassword = await bcrypt.hash(password,10);
    console.log("Hashed password", hashedPassword);
    const user= await User.create({
        username,email,password:hashedPassword
    });
    console.log("user", user);
    if(user){
        res.status(201).json({_id:user._id,email:user.email})
    }else{
        res.status(400);
        throw new Error("User data not valid");
    }
    res.json({message:"Successfully Registered"})
});
const currentUser=asyncHandler(async (req,res)=>{
    res.json({message:"Current user information"})
});

const loginUser=asyncHandler(async (req,res)=>{
    const {email,password}=req.body;
    if(!email||!password){
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    const user = await User.findOne({email});
    //compare the req password with hashed psswrd
    if(user && (await bcrypt.compare(password, user.password))){
        //generating the access token
        const accessToken=jwt.sign({
            user:{
                username:user.username,
                email: user.email,
                id:user._id
            }
        },
    process.env.ACCESS_TOKEN,{expiresIn:"1m"}
)
        res.status(200).json({accessToken});
    }else{
        res.status(401);
        throw new Error("user or password not valid")
    }
   
});

module.exports={registerUser,loginUser,currentUser};