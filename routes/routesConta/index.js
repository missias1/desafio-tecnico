const routes = require('express').Router();

routes.post('/deposito');
routes.post('/saque');
routes.get('/:id');

module.exports = routes;