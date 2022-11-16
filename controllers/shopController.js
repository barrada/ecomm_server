const shopController={};
const Shop=require('../models/ShopModel');

// check if shop name exists
shopController.checkShop= async function(req, res, next){
	name=await req.body.name
    check= await Shop.checkShop(name);

    // if(this.check == 1){console.log("exists")}
    // if(this.check == 0){console.log("no shop with this name")}    
	res.json({exists:check});   		
}



module.exports = shopController;