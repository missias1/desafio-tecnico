const express = require('express');
require('express-async-errors');
const bodyParser = require('body-parser');
// const routeLogin = require('./routes/routeLogin');
// const routesAtivos = require('./routes/routesAtivos');
// const routesConta = require('./routes/routesConta');
// const routesInvestimentos = require('./routes/routesInvestimentos');
const errorHandler = require('./middlewares/errorHandler');
const routes = require('./routes');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerConfig = require('./documentation/swaggerConfig');

const app = express();

app.use(bodyParser.json());

const swaggerDoc = swaggerJSDoc(swaggerConfig);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))
app.use('/login', routes.routeLogin);
// app.use('/register', routes.routeLogin);
app.use('/ativos', routes.routesAtivos);
app.use('/conta', routes.routesConta);
app.use('/investimentos', routes.routesInvestimentos);
app.use(errorHandler);

module.exports = app