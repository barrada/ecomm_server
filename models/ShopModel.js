// require database
const db = require("../config/database");
shops = "shops";

const Shop = {};
// queries
Shop.checkShop = async (name) => {
    checkQuery = `SELECT count(*) as shop_exists FROM ${shops} WHERE shop_name="${name}"`;
    result = await new Promise((resolve,reject)=>{
        db.query(checkQuery,function(err,count){
            return void err ? reject(err) : resolve(count);
        })
    })
        // exists = JSON.parse(JSON.stringify(result[0].shop_exists))
        // console.log(exists)
    // return exists
    // return result
    return JSON.parse(JSON.stringify(result[0].shop_exists))
    // console.log(name)
}
// check if email exists

module.exports = Shop;
