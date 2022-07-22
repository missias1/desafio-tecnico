const routes = require('express').Router();
const controllerLogin = require('../../controllers/controllerLogin');
const { validateLogin } = require('../../middlewares/validateLogin');

/**
 * @swagger
 *  tags:
 *      name: Login
 *      description: Endpoint para usuário fazer login
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          Login:
 *               type: object
 *               required:
 *                   - email
 *                   - password
 *               properties:
 *                   email:
 *                      type: string
 *                   password:
 *                      type: string
 *               example:
 *                   email: desafio@gmail.com
 *                   password: 12345678
 */

/**
 * @swagger
 *  /login:
 *    post:
 *      tags: [Login]
 *      description: Endpoint que permite o usuário fazer o login
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        201:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                items:
 *                   $ref: '#/components/schemas/Login'
 */

routes.post('/', validateLogin, controllerLogin.findClient);

module.exports = routes;