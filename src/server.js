//Dependecies
const express = require('express');
const routes = require('./routes/routes');
require('./database')




//App
const app = express();
port = process.env.PORT || 3000
app.use(express.json())
app.use(routes);
app.listen(port);
console.log('Message RESTful API server started on: ' + port);



