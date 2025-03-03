/* Seção de Imports */

//Imports para caminhos:
const path = require('path');
const routes = require('./routes');

//Imports das ferramentas da aplicação:
const express = require('express');
const app = express();

//Imports das configurações de conexão:
const mongoose = require('mongoose');
require('dotenv').config();

/* Seção de Conexão */
mongoose.connect(process.env.CONNECTIONSTRING).
then(() => {
    app.emit('ready');
});

/* Seção de uso da aplicação: */
app.use(express.urlencoded({ extended: true})); //Permite pegar as informações via POST
app.use(routes); //Usa as rotas para tornar dinâmico a construção do site
app.use(express.static(path.resolve(__dirname, 'public'))); //criando modelos státicos para o site.


/* Seção de view da aplicação: */
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//Permitindo o funcionamento do site após estabelecer a conexão com o banco:
app.on('ready', () => {
    //Hospedando o site na porta 3000 do localhost
    app.listen(3000, () => {
        console.log('Servidor ativo na porta 3000.');
        console.log('Acesse aqui: http://localhost:3000');
    });
})
