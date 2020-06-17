// require database
const db = require("../config/database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

users = "users";

const Account = {};
activate = async function(id){
    db_user_activate = `  UPDATE ${users} SET email_verified = 1 WHERE users.id = ${id}`
    db.query(db_user_activate, (err, res) => {
        if (err){
            // throw err;
            return 403;
        } 
        // console.log("success")
        else{
            return {activation:"success"}
            // console.log("activated")
        }
      });
  
    // return "activated"
}
Account.verifyEmail = async function (vertoken, password) {
  // if(typeof vertoken != "undefined" || vertoken != "" || vertoken != null){
  if (vertoken != "") {
    return jwt.verify(vertoken, "EktibAPI", function (err, data) {
      if (err) {
        return 403;
      } else {
        // return { authorization: "success", data: data };
        return this.activate(data.id)
      }
    });
  } else {
    return 403;
  }
};

// verity email ends
module.exports = Account;
