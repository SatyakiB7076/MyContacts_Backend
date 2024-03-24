const getContacts=(req,res)=>{
    res.status(200).json({message:"All contacts here"});
};
const createContact=(req,res)=>{
    res.status(200).json({message:"Create contact"})};

    const getContact=(req,res)=>{
        res.status(200).json({message:`Get contact ${req.params.id}`})
    }
    const updateContact=(req,res)=>{
        res.status(200).json({message:`Update contact ${req.params.id}`})
    }
    const deleteContact=(req,res)=>{
        res.status(200).json({message:`Delete contact ${req.params.id}`})
    }









module.exports={getContacts,createContact,getContact,updateContact,deleteContact};