const routes = require('express').Router();
const controllerAtivos = require('../../controllers/controllerAtivos');
const authentication = require('../../middlewares/authentication');

// /**
//  * @swagger
//  *  tags:
//  *      name: Ativos do cliente
//  *      description: Endpoint que traz informações sobre os ativos que o cliente possui
//  */

// /**
//  * @swagger
//  *  /ativos/client/:id:
//  *    get:
//  *      tags: [Ativos do cliente]
//  *      description: Endpoint que permite ver os ativos de um determinado cliente
//  *      security:
//  *        - bearerAuth: []
//  *      responses:
//  *        200:
//  *          content:
//  *            application/json:
//  *              schema:
//  *                type: object
//  *                items:
//  */
routes.get('/client/:clientId', authentication, controllerAtivos.getAssetsFromOneClientById);
routes.get('/:id', controllerAtivos.getAssetById);
routes.get('/', controllerAtivos.getAllAssets);

module.exports = routes;