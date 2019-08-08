// MySQL Initialization
const mysql=require("mysql");
const mysqlCon=mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"stylish1"
});
mysqlCon.connect(function(err){
	if(err){
		throw err;
	}else{
		console.log("Connected!");
	}
});
module.exports={
	core:mysql,
	con:mysqlCon
};