//Dependecies
const express = require('express'),
const routes = require('./api/routes/msgRoutes');
const config_data = require('./config/config.development.json')

//App
app = express(),

//Routes
routes(app);

//Database
const database = mySql.createConnection({
    host:config_data.host,
    user:config_data.user,
    password:config_data.password,
    database:config_data.database
})

//Configurations
port = process.env.PORT || 3000,
app.listen(port);


console.log('Message RESTful API server started on: ' + port);