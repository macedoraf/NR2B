const express = require('express');
const routes = require('./routes/routes');

//importando a comunicação do banco de dados para reconhecimento das acoes a serem tomadas (CRUD)
require('./database/')

const app = express();

app.use(express.json());
app.use(routes); 

//porta que o server será escutado
app.listen(3333);
