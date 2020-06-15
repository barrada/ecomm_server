const regiterController={};
const Register=require('../models/RegisterModel');

// check if email exists
regiterController.checkEmail= async function(req, res, next){
	email=await req.body.email
const  check= await Register.checkEmail(email);
	res.json(check);   		
}

regiterController.addUser= async function(req, res, next){
	email=await req.body.email;
	firstname = await req.body.firstname;
	lastname = await req.body.lastname;
	password = await req.body.password
const  insert= await Register.insertUser(email,firstname,lastname,password);
// console.log("got " + email + " " + firstname + " " + lastname + " " + password)
	res.json(insert);   		
}

// get all Posts
// regiterController.recipes= async function(req, res, next){
// 		page=await req.query.page
//     const recipes= await Register.getAll(page);
// 		res.json(recipes);   		
// }


// export
module.exports = regiterController;