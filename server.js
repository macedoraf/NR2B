//Dependecies
const express = require('express');
const routes = require('./src/routes/routes');
require('./src/database')
const dotenv = require("dotenv-safe")
const jwt = require('jsonwebtoken');




//App
dotenv.config()
const app = express();
port = process.env.PORT || 3000
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(routes);
app.listen(port);
console.log('Message RESTful API server started on: ' + port);



