const express = require ("express");
const router=express.Router();
const {getContacts,createContact,getContact,updateContact,deleteContact}=require("../controllers/contactControllers");


router.route("/").get(getContacts);
router.route("/").post(createContact);

router.route("/:id").put(updateContact)
router.route("/:id").delete(deleteContact)
router.route("/:id").get(getContact)
module.exports =router;
