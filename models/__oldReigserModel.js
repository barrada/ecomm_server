// require database
const db = require('../config/database');
users='users'

const Register={};
// queries

// 
Register.checkEmail = async(email) =>{
	checkEmailQuery = `Select id from ${users} WHERE email = "${email}"`;


	
	
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
		// console.log(result)
		// return JSON.stringify(result)
		return JSON.parse(JSON.stringify(result))
		
	}

	// const result = db.query(checkEmailQuery,(err,res)=>{
	// 	return res
	// })


	// return result
	emz = await getdata()
	return emz
	// console.log(emz[0].id)
	// if (email == 'barrada'){
	// 	return "ITS YOU"
	// }else{
	// 	return email + " doesn't exist"
	// }
	}
module.exports=Register;