// testing accept payment - structure of router may be changed later (should)
var express = require('express');
var router = express.Router();

// const accountController=require('../controllers/accountController');

/* account verification */
// router.post('/verify', accountController.verifyEmail )
// router.post('/sendVerificationToken', accountController.sendEmailVerification )
// router.post('/sendResetToken', accountController.sendPassReset )
// router.post('/saveNewPassword', accountController.saveNewPassword )
// router.post('/getUserInfo',accountController.getUserInfo)

router.post('/', function(req, res, next) {
    // res.status(200).json({'index': { pay: 'page' }});
    var unirest = require("unirest");

var req = unirest("POST", "https://accept.paymobsolutions.com/api/auth/tokens");

req.headers({
  "content-type": "application/json"
});

req.type("json");
req.send({
  "username": "your_username",
  "password": "your_password"
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
  });
  

// router.post('/', registerController.checkEmail );


  module.exports = router;