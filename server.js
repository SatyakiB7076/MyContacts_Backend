const express = require ("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const app=express();
const dotenv= require("./loadEnvironment.js");

//custom function to connect to database
connectDB();

//middleware to parse the requested client body in json format
app.use(express.json());

//middleware
app.use("/api/contacts",require("./routes/contactRoutes"));
//for authentication
app.use("/api/users",require("./routes/userRoutes"));

//error handler middleware
app.use(errorHandler);





//using env to get the PORT
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})