var express = require('express');
var router = express.Router();

const registerController=require('../controllers/registerController');

/* GET Registeration page. */
router.get('/', function(req, res, next) {
    res.status(200).json({'index': { title: 'Register' }});
  });

  router.post('/', registerController.checkEmail );
  router.post('/add', registerController.addUser );
  
  // router.post('/', function(req, res, next) {
  //     console.log(req.body)
  //   res.status(200).json({reply: req.body });
  //   next
  // });

  module.exports = router;