const express = require ("express");
const router=express.Router();
const {getContacts,createContact,getContact,updateContact,deleteContact}=require("../controllers/contactControllers");

//using exported methods containing CRUD logic creating routes
//we can merge routes together if the api path is same
router.route("/").get(getContacts).post(createContact);

router.route("/:id").put(updateContact)
router.route("/:id").delete(deleteContact)
router.route("/:id").get(getContact)
module.exports =router;
