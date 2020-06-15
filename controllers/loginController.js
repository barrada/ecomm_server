const loginController={};
const Login=require('../models/LoginModel');


loginController.authenticate = async function (req, res, next){
    email= req.body.email;
    password= req.body.password
    const authenticate = Login.authenticate(email,password);
    res.status(200).json(await authenticate);
    // console.log(email + " " + password)
    // console.log(req.body)

}
// check if email exists
// regiterController.checkEmail= async function(req, res, next){
// 	email=await req.body.email
// const  check= await Login.checkEmail(email);
// 	res.json(check);   		
// }


module.exports = loginController;