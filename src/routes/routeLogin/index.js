const routes = require('express').Router();
const controllerLogin = require('../../controllers/controllerLogin');

routes.post('/', controllerLogin.findClient);

module.exports = routes;