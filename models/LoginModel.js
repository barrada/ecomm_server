// require database
const db = require("../config/database");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

users = "users";

const Login = {};

Login.authenticate = async function(email,password){
    db_user_query = `SELECT * FROM ${users} WHERE email="${email}"`

    select = async () => {
        const result = await new Promise((resolve, reject) => {
          db.query(db_user_query, (err, res) => {
            return void err ? reject(err) : resolve(res);
          });
        });
        return result;
      };
      //
      getinfo= async () => {
        result = await select();
        return JSON.parse(JSON.stringify(result));
      };
   
      userInfo = await getinfo();

      if(typeof userInfo != "undefined" && userInfo != null && userInfo.length != null
      && userInfo.length > 0){
        id=userInfo[0].id;
        email=userInfo[0].email;
        firstname=userInfo[0].firstname;
        lastname=userInfo[0].lastname;
        dbpass=userInfo[0].password;
        avatar=userInfo[0].avatar;
        email_verified=userInfo[0].email_verified;
    
      passwordCheck = bcrypt.compareSync(password, dbpass);
      if(passwordCheck){
          const token = jwt.sign({id: id,email:email, firstname: firstname, lastname: lastname, email_verified: email_verified, avatar: avatar}, 'EktibAPI');
        //   console.log(jwt.verify(token,'EktibAPI'))
          // console.log(userInfo[0].lastname)
          return {token:token,data:{id,firstname,lastname,avatar,email_verified}};
      }else{
          // console.log("wrong pass")
        //   res.sendStatus(403)
        return 401
      }
          console.log("exists")
      }else{
        //   console.log("forbidden")
        return 401
      }
      
      
    //   bcrypt.compare(password, dbpass, function(err, result) {
    //     console.log(result)
    // });

    // if (!bcrypt.compareSync(password, dbpass)) { return "done" }
    // passwordCheck = bcrypt.compareSync(password, dbpass);
    // if(passwordCheck){
    //     console.log("LOGGED IN")
    // }

    //   if(bcrypt.compareSync(this.password, this.dbpass,function(err,result){
    //       return result
    //   })) { 
    //       console.log("Authenticated")
    //   }

    
//   if(!email || !password){
//       return "email and password must be filled"
//   }else{
//       return "ok"
//     }
    
}   
// queries

// check if email exists

Login.authorize = async function(token){

    return jwt.verify(token,'EktibAPI',function(err,data){
        if(err){
            return 403
        }else{
            return {authorization:"success",data:data}
        }

    })
  
    // jwt.verify(token,'EktibAPI',(err,authData)=>{
    //     if(err){
    //         return 403
    //     }else{
    //         console.log(token)
    //     }
    // })
}


module.exports = Login;
