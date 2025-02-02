/* Utilizando o Polimorfísmo */

function Account(account, agency, balance) {
    this.account = account;
    this.agency = agency;
    this.balance = balance;
}

/* Seção dos Prototypes para a Conta */

//Realizando saques:
Account.prototype.withdraw = function(value) {
    if(this.balance < value) {
        console.log(`Saldo Insuficiente!`);
        return;
    }
    
    this.balance -= value;    
    this.Balance();
}

//Realizando depósitos:
Account.prototype.deposit = function(value) {
    this.balance += value;
    this.Balance();
}

//Vendo o Saldo:
Account.prototype.Balance = function() {
    console.log(`Ag/c: ${this.account}/${this.agency}.\nSaldo: R$${this.balance.toFixed(2)}`);
}

//Criando a conta:
const account1 = new Account(1010, 200, 20);

//Mostrando a conta e o Saldo:
//account1.Balance();

//Depositando 100:
//account1.deposit(100);

//pagando 130 e depois 120:
// account1.withdraw(130);
// account1.withdraw(120);

/* Criando outros tipos de conta */
function CC(account, agency, balance, limit){
    Account.call(this, account, agency, balance);
    this.limit = limit;
}

//Fazendo o Link do prototype do CC para o Account:
CC.prototype = Object.create(Account.prototype);
CC.prototype.constructor = CC;

//Reescrevendo o saque para o CC:
CC.prototype.withdraw = function(value) {
    if(value > (this.balance + this.limit)) {
        console.log(`Saldo Insuficiente!`);
        return;
    }
    
    this.balance -= value;    
    this.Balance();
}

//Testando CC:
const account2 = new CC(2020, 100, 400, 1000);

//Mostrando Saldo:
account2.Balance();

//Depositando + 500:
account2.deposit(500);

//Sacando 2000 ou 1800:
account2.withdraw(2000); //Recusa o saque devido ao valor ser superior ao saldo + limite.
account2.withdraw(1800);//Permite o saque devido ao limite de 1000.