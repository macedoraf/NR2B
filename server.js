//Dependecies
var express = require('express'),
config_data = require('./config/config.development.json');
routes = require('./api/routes/routes');
const mySql = require('mysql');

//App
app = express(),
port = process.env.PORT || 3000,
routes(app),
app.listen(port);
console.log('Message RESTful API server started on: ' + port);

//Database
var con = mySql.createConnection({
    host:config_data.host,
    user:config_data.user,
    password:config_data.password,
    database:config_data.database
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

con.end(function(err) {
    if (err) throw err;
    console.log("Disconected!");
  });




