const routes = require('express').Router();
const controllerRegister = require('../../controllers/controllerRegister');
const { validateRegister } = require('../../middlewares/validateRegister');

routes.post('/', validateRegister, controllerRegister.addClient);

module.exports = routes;