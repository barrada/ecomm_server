const accountController={};
const Account=require('../models/AccountModel');


// activate account
accountController.verifyEmail = async function(req, res, next){
    vertoken=await req.body.token
    // console.log(vertoken)
const  verify= await Account.verifyEmail(vertoken);
    // console.log(verify)
    if(verify == 403){
        res.status(403).json({activation:false});
    }else{
         res.status(200).json({activation:true}); 
        //  console.log(verify)
    }
	
}
// send verification email
accountController.sendEmailVerification = async function(req,res,next){
    email = await req.body.email
    lang = await req.body.lang
    firstname = await req.body.firstname
    sendtoken = await Account.sendToken(email,lang,firstname)
    if(sendtoken == 200){
        res.status(200).json({sentToken:true});         
    }else{
        res.status(403).json({sentToken:false}); 
    }
}
// get user info from token (change to get info from database by id in token)
accountController.getUserInfo = async function(req,res,next){
    userToken = await req.body.token
    // console.log(userToken)
    getUserInfo = await Account.userInfo(userToken)
    if(getUserInfo !== 403){
        // console.log(this.getUserInfo)
        res.status(200).json(this.getUserInfo);
    }else{
        res.status(403).json({getInfo:false}); 
    }
}
//  send password reset token
accountController.sendPassReset = async function(req,res,next){
    email = await req.body.email
    lang = await req.body.lang
    sendResetToken = await Account.sendResetToken(email,lang)
    if(sendResetToken !== 403){
        res.status(200).json({emailSent:true})
    }else{
        res.status(403).json({emailSent:false})
    }
}
accountController.saveNewPassword = async function(req,res,next){
    token = await req.body.token
    pass = await req.body.pass
    // console.log(pass)
    this.saveNewPass = await Account.saveNewPass(token,pass)
    // res.status(200).json(saveNewPass)
    if(this.saveNewPass !== 403){
        res.status(200).json({resetPass:true})
    }else{
        res.status(403).json({emailSent:false})
    }

}
module.exports = accountController;