const express = require ("express");
const app=express();
const dotenv=require("dotenv").config();

//middleware
app.use("/api/contacts",require("./routes/contactRoutes"))


const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})