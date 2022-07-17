const routes = require('express').Router();
const controllerAtivos = require('../../controllers/controllerAtivos');
const { validateJWT } = require('../../utils/jwtToken');

routes.get('/:clientId', validateJWT, controllerAtivos.getAssetsFromOneClientById);
// routes.get('/{assetId}');

module.exports = routes;