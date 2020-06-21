// require database
const db = require("../config/database");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const mail = require("../modules/mail");

users = "users";

const Account = {};
activate = async function(email){
    db_user_activate = `UPDATE ${users} SET email_verified = 1 WHERE users.email = "${email}"`
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
        // console.log(data.email)
        return this.activate(data.email)
      }
    });
  } else {
    return 403;
  }
};

Account.sendToken = async function (email, lang, firstname){

    const token = jwt.sign({email:email,lang:lang}, 'EktibAPI');
    mail.sendVerificationMail(email,lang,token, firstname)
    return 200
}

// Get User info from token


getInfoSelect = async (id) => {
    getInfoQuery = `Select id,email,firstname,lastname,date_created,email_verified,avatar FROM ${users} WHERE users.id = "${id}"`;
    const result = await new Promise((resolve, reject) => {
      db.query(getInfoQuery , (err, res) => {
        return void err ? reject(err) : resolve(res);
      });
    });
    // console.log(result)
    return result;
  };
  getInfo= async (id) => {
    result = await getInfoSelect(id);
    
    return JSON.parse(JSON.stringify(result));
    // console.log(result)
  };

Account.userInfo = async function (userToken){
    if (userToken != "") {
        return jwt.verify(userToken, "EktibAPI", function (err, data) {
          if (err) {
            return 403;
          } else {
            // return { authorization: "success", data: data };
            // console.log(data)
            // return (data)
            return getInfo(data.id)
          }
        });
      } else {
        return 403;
      }

}
// send password reset token
Account.sendResetToken = async function (email,lang){
    // console.log(email)
    // check if email exists
    checkQuery =  `SELECT count(*) as email_exists FROM ${users} WHERE email="${email}"`;
    db.query(checkQuery, (err, res) => {
       if(err){
           return err
       }else
            result = JSON.parse(JSON.stringify(res))
            email_exists =  result[0].email_exists
            // console.log(email_exists)
           if(email_exists == 1){
               token = jwt.sign({email:email,lang:lang}, 'EktibAPI');
                // console.log("exists")
                // console.log(jwt.verify(token,'EktibAPI'))
                mail.sendPassResetToken(email,lang,token)
                // return {emailSent:'success'}
                return 200
 
           }else{
               return 403
            // console.log("noi")
           }
           
      });
}
savePass = function(email,pass){
  // UPDATE ${users} SET password= "thepass" WHERE users.email = "${email}"
  hashedpassword = bcrypt.hashSync(pass, saltRounds);
  // console.log(hashedpassword)
  update_q = `UPDATE ${users} SET password= "${hashedpassword}" WHERE users.email = "${email}"`
  db.query(update_q, (err, res) => {
    if (err){
        // throw err;
        return 403;
    } 
    // console.log("success")
    else{
        return {reset:"success"}
        // console.log("activated")
    }
  });
}
Account.saveNewPass = async function (token,pass){
    // console.log("saved new pass")
   jwt.verify(token, "EktibAPI", function (err, data){
        if(err){
            return 403
        }
        else{
            // return data
            // console.log(data.email)
            // console.log(pass)
            savePass(data.email,pass)
        }
    })
    
}
module.exports = Account;
