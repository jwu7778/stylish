// Deployment Webhook
const cst=require("./constants.js");
const process=require("child_process");
module.exports={
	update:function(callback){
		process.exec("git pull https://帳號:密碼@github.com/cwpeng/stylish-backend.git master", {
			cwd:cst.STYLISH_HOME
		}, function(error, stdout, stderr){
			if(error===null){
				callback();
			}else{
				callback(error);
			}
			process.exec("sudo restart stylish", {
				cwd:cst.STYLISH_HOME
			}, function(error, stdout, stderr){
				if(error===null){
					console.log("Standard Out", stdout);
				}else{
					console.log("Error", error);
				}
			});
		});
	}
};