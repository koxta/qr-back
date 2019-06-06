const express = require('express'),
const bodyParser = require('body-parser');

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


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./app/routes/appRoutes'); //importing route
routes(app); //register the route
