const cst=require("../util/constants.js");
// MySQL Initialization
const mysql=require("../util/mysqlcon.js");
// Build DAO Object
module.exports={
	insert:function(req){
		return new Promise(function(resolve, reject){
			let campaign={
				product_id:parseInt(req.body.product_id),
				picture:req.body.picture,
				story:req.body.story
			};
			mysql.con.query("insert into campaign set ?", campaign, function(error, results, fields){
				if(error){
					reject("Add Campaign Error");
				}else{
					resolve("OK");
				}
			});
		});
	},
	list:function(){
		return new Promise(function(resolve, reject){
			let query="select * from campaign order by id";
			mysql.con.query(query, function(error, results, fields){
				if(error){
					reject("Database Query Error");
				}else{
					resolve(results);
				}
			});
		});
	}
};