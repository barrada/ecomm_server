var express = require('express');
var router = express.Router();

const accountController=require('../controllers/accountController');

/* account verification */
router.post('/verify', accountController.verifyEmail )
router.post('/sendVerificationToken', accountController.sendEmailVerification )
router.post('/getUserInfo',accountController.getUserInfo)

// router.post('/', registerController.checkEmail );


  module.exports = router;