const express = require('express');
const bodyParser = require('body-parser');
const routeLogin = require('./src/routes/routeLogin');
const routesAtivos = require('./src/routes/routesAtivos');
const routesConta = require('./src/routes/routesConta');
const routesInvestimentos = require('./src/routes/routesInvestimentos');

const app = express();

app.use(bodyParser.json());

app.use('/login', routeLogin);
// app.use('/ativos')
// app.use('/conta')
// app.use('/investimentos')


module.exports = app