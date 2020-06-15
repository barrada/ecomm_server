var express = require('express');
var router = express.Router();

const loginController=require('../controllers/loginController');

/* GET Registeration page. */
router.post('/', loginController.authenticate) 
//   router.post('/', loginController.checkEmail );
//   router.post('/add', registerController.addUser );


  module.exports = router;