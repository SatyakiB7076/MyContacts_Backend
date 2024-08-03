const express = require ("express");
const { registerUser, loginUser, currentUser } = require("../controllers/userControllers");
const router=express.Router();


router.post("/register",registerUser)
router.get("/current",currentUser)
router.post("/login",loginUser)

module.exports=router;