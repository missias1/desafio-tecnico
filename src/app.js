const express = require('express');
const bodyParser = require('body-parser');
const routeLogin = require('./routes/routeLogin');
const routesAtivos = require('./routes/routesAtivos');
const routesConta = require('./routes/routesConta');
const routesInvestimentos = require('./routes/routesInvestimentos');

const app = express();

app.use(bodyParser.json());

// app.use('/login')
// app.use('/ativos')
// app.use('/conta')
// app.use('/investimentos')


module.exports = app