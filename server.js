const express = require ("express");
const errorHandler = require("./middleware/errorHandler");
const app=express();
const dotenv=require("dotenv").config();

//middleware to pass the requested client body
app.use(express.json());
//middleware
app.use("/api/contacts",require("./routes/contactRoutes"));
//error handler middleware
app.use(errorHandler);
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})