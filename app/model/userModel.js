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

User.addDevice = (userId,result) =>{

    sql.query(`SELECT * FROM \`user\` WHERE UserName = "${userId}"`,
    (err,res)=>{
        console.log(res);
        if(res.length == 0)
        {
            registerUser(userId)
            result("user registered")
        }
        else
        {
            result("success")
        }
    })
}


function registerUser(userId)
{
    sql.query(`INSERT INTO \`user\` (\`UserId\`, \`UserName\`) VALUES (NULL, '${userId}');`,
    (err,res)=>{
        if(err)
        {
            console.log(err);
        }
    })
}

module.exports = User;
