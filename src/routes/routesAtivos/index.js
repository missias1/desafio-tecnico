const routes = require('express').Router();
const controllerAtivos = require('../../controllers/controllerAtivos');

routes.get('/client/:clientId', controllerAtivos.getAssetsFromOneClientById);
routes.get('/:assetId', controllerAtivos.getAssetById);
routes.get('/', controllerAtivos.getAllAssets)
module.exports = routes;