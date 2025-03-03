const homeModel = require("../model/homeModel");

//Aba inicial da página com formulário:
exports.initialPage = (req, res) => {
    res.render('index');
}

//Seção de resposta ao formulário com os request body:
exports.postMsg = (req, res) => {
    homeModel.create({
        Name: req.body.nome,
        Email: req.body.email
    });
    res.send(`Formulário recebido!
        voltando ao formulário: <a href="/">Home</a>   
    `);
}