const express = require('express');
const bodyParser = require('body-parser');
const routeLogin = require('./src/routes/routeLogin');
const routesAtivos = require('./src/routes/routesAtivos');
const routesConta = require('./src/routes/routesConta');
const routesInvestimentos = require('./src/routes/routesInvestimentos');
const errorHandler = require('./src/middlewares/errorHandler');

const app = express();

app.use(bodyParser.json());

app.use('/login', routeLogin);
app.use('/ativos', routesAtivos);
app.use('/conta', routesConta);
app.use('/investimentos', routesInvestimentos);
app.use(errorHandler);

module.exports = app