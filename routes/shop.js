var express = require('express');
var router = express.Router();

const shopController=require('../controllers/shopController');

/* Check if shop is already available */
router.post('/checkshop', shopController.checkShop )
// 






  module.exports = router;