const loginController = {};
const Login = require("../models/LoginModel");
// const test = require("../modules/mail.js")
// test.sendVerificationMail()

loginController.authenticate = async function (req, res, next) {
  email = req.body.email;
  password = req.body.password;
  const authenticate = Login.authenticate(email, password);
  if ((await authenticate) == 401) {
    res.status(401).json({ Access: "Forbidden" });
  } else {
    res.status(200).json(await authenticate);
  }
  // console.log(email + " " + password)
  // console.log(req.body)
};

loginController.authorize = async function (req, res, next) {
  // token = req.body.token
  bearerHeader = req.headers["authorization"];
  // check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // split at the space
    const bearer = bearerHeader.split(" ");
    // get token from array
    const token = bearer[1]; 
    const authorize = Login.authorize(token);

        if ((await authorize) == 403) {
        res.status(403).json("Not Authorized");
        } else {
        res.status(200).json(await authorize);
        }
    next();
  } else {
    res.status(403).json("Not Authorized");
  }
  // return bearerHeader
  //     const authorize = Login.authorize(token)
  //    if(await authorize == 403){
  //             res.status(403).json("Not Authorized")
  //    }else{
  //     res.status(200).json(await authorize)
  //    }
};
// check if email exists
// regiterController.checkEmail= async function(req, res, next){
// 	email=await req.body.email
// const  check= await Login.checkEmail(email);
// 	res.json(check);
// }

module.exports = loginController;
