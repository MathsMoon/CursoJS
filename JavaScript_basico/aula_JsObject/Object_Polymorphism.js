/* Utilizando o Polimorfísmo */

function Account(acount, agency, balance) {
    this.Acount = acount;
    this.Agency = agency;
    this.Balance = balance;
}

/* Seção dos Prototypes para a Conta */

//Realizando saques:
Account.prototype.withdraw = function() {

}

//Realizando depósitos:
Account.prototype.deposit = function() {

}

//Realizando Empréstimos:
Account.prototype