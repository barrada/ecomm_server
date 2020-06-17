const accountController={};
const Account=require('../models/AccountModel');


// activate account
accountController.verifyEmail = async function(req, res, next){
	vertoken=await req.query.token
const  verify= await Account.verifyEmail(vertoken);
    // console.log(verify)
    if(verify == 403){
        res.status(403).json({activation:false});
    }else{
         res.status(200).json({activation:true}); 
        //  console.log(verify)
    }
	
}



module.exports = accountController;