const routes = require('express').Router();
const controllerLogin = require('../../controllers/controllerLogin');
const { validateLogin } = require('../../middlewares/validateLogin');

routes.post('/', validateLogin, controllerLogin.findClient);

module.exports = routes;