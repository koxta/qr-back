const express = require('express'),
app = express(),
port = process.env.PORT || 3000;

const mysql = require('mysql');

const mc = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"qr"
});

mc.connect();



app.listen(port);



mc.query("Select * from Products", function (err, res) {

    if(err) {
        console.log("error: ", err);
    }
    else{
      console.log('tasks : ', res);  
    }
});   


