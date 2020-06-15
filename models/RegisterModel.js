// require database
const db = require('../config/database');
users='users'

const Register={};
// queries

// 
Register.checkEmail = async(email) =>{
	// checkEmailQuery = `Select id from ${users} WHERE email = "${email}"`;
	checkEmailQuery = `SELECT count(*) as email_exists FROM ${users} WHERE email="${email}"`
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
	
	
	select= async()=>{
		const result = await new Promise((resolve, reject) => {
  	  db.query(checkEmailQuery, (err, res) => {
      return void err ? reject(err) : resolve(res)
   	 })
		})
		return result
	}
	// 
	getdata=async()=>{
		result= await select()
		return JSON.parse(JSON.stringify(result))
		
	}

	// return result
	emz = await getdata()
	return emz

	}
module.exports=Register;