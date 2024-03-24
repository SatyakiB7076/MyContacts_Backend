//to accept the response and parse the error message into a json format
const {constants}=require("../constants");


const errorHandler=(err,req,res,next)=>{
    const statusCode=res.statusCode?res.statusCode:500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({title:"Validation Error",message: err.message,stackTrace:err.stack});
            break;
            case constants.NOT_FOUND:
                res.json({title:"Not Found",message: err.message,stackTrace:err.stack});
            case constants.UNAUTHORIZED:
                res.json({title:"Unauthorized Access",message: err.message,stackTrace:err.stack});
            case constants.FORBIDDEN:
                res.json({title:"Forbidden request",message: err.message,stackTrace:err.stack});
        default:
            break;
    }
    
};

module.exports=errorHandler;