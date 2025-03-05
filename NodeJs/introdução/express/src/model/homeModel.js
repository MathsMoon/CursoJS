const mongoose = require('mongoose');

//Construindo o template para as informações de usuário:
const homeScheme = new mongoose.Schema({
    Name: {type: String, required: true},
    Email: {type: String, required: true}
});

const homeModel = mongoose.model('Home', homeScheme);

module.exports = homeModel;