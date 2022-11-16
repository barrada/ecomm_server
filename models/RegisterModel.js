// require database
const db = require("../config/database");
const bcrypt = require('bcrypt');
const saltRounds = 10;
users = "users";

const Register = {};
// queries

// check if email exists
Register.checkEmail = async (email) => {
  // checkEmailQuery = `Select id from ${users} WHERE email = "${email}"`;
  checkEmailQuery = `SELECT count(*) as email_exists FROM ${users} WHERE email="${email}"`;
  // 	db.query(checkEmailQuery,function(err,count){
  // 		emailExists= count[0].numRows
  // 		// pageCount = Math.ceil(postsCount / perPage);
  // 		// console.log(emailExists)
  // 		// res= JSON.parse(e)
  // 		// console.log( JSON.parse(JSON.stringify({'id':emailExists})))
  // 		// return JSON.stringify({'id':emailExists})
  // 		res =  ({"id":emailExists})
  // 		// console.log(JSON.parse(JSON.stringify(res)))
  // 		return JSON.parse(JSON.stringify(res))
  // })

  select = async () => {
    const result = await new Promise((resolve, reject) => {
      db.query(checkEmailQuery, (err, res) => {
        return void err ? reject(err) : resolve(res);
      });
    });
    return result;
  };
  //
  getdata = async () => {
    result = await select();
    return JSON.parse(JSON.stringify(result));
  };

  // return result
  emz = await getdata();
  return emz;
};

// Insert New User
Register.insertUser = async function(email,firstname,lastname,password){

	hashedpassword = bcrypt.hashSync(password, saltRounds);
	insertQuery = `insert INTO ${users} (email,firstname,lastname,password) VALUES ("${email}","${firstname}","${lastname}","${hashedpassword}")`;

	

		db.query(insertQuery,function(err,success){
			if (err) throw err;
			// return "inserted"
			// return "201"	
		})

		return 201

	// insert = async function(){
	// 	db.query(insertQuery,function(err,success){
	// 		if (err) throw err;
	// 		// return "inserted"
	// 		return "201"
	
	// 	})
	// }

// console.log(await insert())
	// if(await insert() == '201'){
	// 	return "succeeded"
	// }else{
	// 	return "error"
	// }
	

}
module.exports = Register;
