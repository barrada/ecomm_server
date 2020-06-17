var express = require('express');
var router = express.Router();

const accountController=require('../controllers/accountController');

/* account verification */
router.get('/verify', accountController.verifyEmail )

// router.post('/', registerController.checkEmail );


  module.exports = router;