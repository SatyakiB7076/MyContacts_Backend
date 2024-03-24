const express = require ("express");
const app=express();
const dotenv=require("dotenv").config();

app.get("/api/contacts",(req,res)=>{
    res.status(200).json({message:"All contacts here"})
})


const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})