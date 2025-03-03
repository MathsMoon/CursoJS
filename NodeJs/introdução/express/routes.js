const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const testsController = require('./src/controllers/testsController');

/* Seção das Rotas */

// Rota da página inicial:
route.get('/', homeController.initialPage);
route.post('/', homeController.postMsg);

// Rota da página de tests:
route.get('/tests/:id_users?', testsController.gettingParams);

//Exportando todas as rotas deste arquivo:
module.exports = route;