const routes = require('express').Router();
const controllerRegister = require('../../controllers/controllerRegister');

routes.post('/', controllerRegister.addClient);

module.exports = routes;