const routes = require('express').Routes();

routes.post('/comprar');
routes.post('/vender');

module.exports = routes;