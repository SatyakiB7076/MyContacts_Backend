const asyncHandler= require("express-async-handler");
const Contact=require("../models/contactModel");

//here we are putting all the logics for the CRUD operations and exporting the methods

const getContacts=asyncHandler(async(req,res)=>{
    const contacts= await Contact.find();
    res.status(200).json(contacts);
});


const createContact=asyncHandler(async(req,res)=>{
    console.log("The requested body is:",req.body);
    const{name,email,phone}=req.body;
    if (!name || !email || !phone) {
        // res.status(400).json({ error: "All fields are mandatory" });
        res.status(400);
        throw new Error("All fields are mandatory");
    } 
    const contact= await Contact.create({
        name,email,phone,
    });
    res.status(201).json(contact);
});



    const getContact=asyncHandler(async(req,res)=>{
        const contact=await Contact.findById(req.params.id);
         if(!contact){
            res.status(404);
            throw new Error("Contact not found");
         }
        res.status(200).json(contact);
    });




    const updateContact=asyncHandler(async(req,res)=>{
        const contact=await Contact.findById(req.params.id);
         if(!contact){
            res.status(404);
            throw new Error("Contact not found");
         }
         const updatdContact=await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
         );
        res.status(200).json(updatdContact);
    });




    const deleteContact = asyncHandler(async (req, res) => {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            res.status(404);
            throw new Error("Contact not found");
        }
        //Contact.remove() doesnt work
        await Contact.deleteOne({ _id: req.params.id }); // Deleting the contact by its ID
        res.status(200).json({ message: `${req.params.id} deleted succesfully` }); 
    });
    
module.exports={getContacts,createContact,getContact,updateContact,deleteContact};