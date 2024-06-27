const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.CONNECTION_STRING);

    console.log(
      `MongoDB Connected: Host - ${conn.connection.host}, Database - ${conn.connection.name}`
    );
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit process with failure code
  }
};

module.exports = connectDB;
