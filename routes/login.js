var express = require('express');
var router = express.Router();

const loginController=require('../controllers/loginController');

/* GET Registeration page. */
router.post('/', loginController.authenticate) 
router.post('/authorize', loginController.authorize) 
// router.get('/',function(req, res, next) {
//     bearerHeader = req.headers['authorization']
//     if(typeof bearerHeader !== undefined){
//         const bearer = bearerHeader.split(' ')
//         const bearerToken = bearer[1]

//         res.status(200).json({ token: req.token });
//     }else{
//         res.sendStatus(403)
//     }
//   });
//   router.post('/', loginController.checkEmail );
//   router.post('/add', registerController.addUser );


  module.exports = router;