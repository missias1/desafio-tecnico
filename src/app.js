const express = require('express');
require('express-async-errors');
const bodyParser = require('body-parser');
const routeLogin = require('./routes/routeLogin');
const routesAtivos = require('./routes/routesAtivos');
const routesConta = require('./routes/routesConta');
const routesInvestimentos = require('./routes/routesInvestimentos');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(bodyParser.json());

app.use('/login', routeLogin);
app.use('/ativos', routesAtivos);
app.use('/conta', routesConta);
app.use('/investimentos', routesInvestimentos);
app.use(errorHandler);

module.exports = app