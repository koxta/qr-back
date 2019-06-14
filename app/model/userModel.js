"user strict";
const sql = require("./db.js");

let User = function(user) {
  this.userId = user.userId;
  this.userName = user.userName;
};


User.getIdByName = (userName,result) =>{
    sql.query(`SELECT UserId FROM \`user\` WHERE UserName = "${userName}"`,
    (err,res)=>{
        result(res);
    })
}


module.exports = User;
