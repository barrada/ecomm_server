// require database
const db = require("../config/database");
const bcrypt = require('bcrypt');

users = "users";

const Login = {};

Login.authenticate = async function(email,password){
    db_pass_query = `SELECT password FROM ${users} WHERE email="${email}"`

    select = async () => {
        const result = await new Promise((resolve, reject) => {
          db.query(db_pass_query, (err, res) => {
            return void err ? reject(err) : resolve(res);
          });
        });
        return result;
      };
      //
      getpass= async () => {
        result = await select();
        return JSON.parse(JSON.stringify(result));
      };

      dbpass_res = await getpass();
      dbpass=dbpass_res[0].password;
  
    passwordCheck = bcrypt.compareSync(password, dbpass);
    if(passwordCheck){
        console.log("logged in")
    }else{
        console.log("wrong pass")
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

      return dbpass;
//   if(!email || !password){
//       return "email and password must be filled"
//   }else{
//       return "ok"
//     }
    
}   
// queries

// check if email exists

	


module.exports = Login;
