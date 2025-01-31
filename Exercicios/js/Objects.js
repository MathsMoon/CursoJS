/* Atividades para aprender a usar Objetos */

// 76 - Adicionando propriedades a um objeto vazio:
const car = {};

function setCar(company, model, year_m) {
    //Criando novos parâmetros no objeto carro:
    car.Company = company;
    car.Model = model;
    car.Year_M = year_m;

    //Retornando o Objeto com os atributos e valores:
    return car;
}

// Criando objeto do carro e mostrando resultado:
const car1 = setCar('Toyota','Corolla','2011');
//console.log(car1);

// 77 - Criando objeto e retornando descrição padrão: (serve pra atividade 86)
const Book = {
    Title: 'title',
    Author: 'author',
    Num_Pages: 13,

    description() {
        console.log(`O livro criado se chama '${this.Title}', escrito pelo ${this.Author}, o livro conta com: ${this.Num_Pages} páginas.`);
    }
};

//Mostrando a descrição do Livro:
//Book.description();

// 78 - Criando um Objeto que retorne idade do cachorro em anos humanos:
const Dog = {
    Name: 'AuAu',
    Race: 'Dog',
    Dog_age: 9,

    dogAgeToHuman() {
        let dog_Age = (this.Dog_age * 7);
        console.log(`O Cachorro se chama: '${this.Name}', da raça: ${this.Race}, ele possui ${dog_Age} anos Humanos.`);
    }
}

//Mostrando a função de conversão de idade:
// Dog.dogAgeToHuman();

// 79 - Criando um Objeto que retorna a velocidade atual, velocidade aumentada e reduzida em relação a atual:
const Automobile = {
    Actual_Speed: 0,
    Max_Speed: 200,
    Min_Speed: 10,

    /* As funções abaixo vão alterando a velocidade acima ou abaixo da velocidade atual, este exercício eu realmente fui 
        na tentativa e erro até encontrar alguma lógica no Math.random() e sair o que eu queria, deu certo, 
        como? Por hora só Deus sabe.
    */

    actualSpeed() {
        this.Actual_Speed = Math.floor(Math.random() * (this.Max_Speed + this.Min_Speed) - this.Min_Speed);
        if(this.Actual_Speed < 0) this.Actual_Speed += this.Min_Speed;
        console.log(`Velocidade Atual: ${this.Actual_Speed} Km/h`);
    },

    increaseSpeed() {
        let maximum = Math.floor(Math.random() * (this.Max_Speed - this.Actual_Speed) + this.Actual_Speed);
        console.log(`Aumentando a velocidade Para: ${maximum} Km/h`);
    },

    reducingSpeed() {
        let minimum = Math.floor(Math.random() * (this.Actual_Speed + this.Min_Speed) - this.Min_Speed);
        if(minimum < 10) minimum = this.Min_Speed;
        console.log(`Reduzindo a velocidade para: ${minimum} Km/h`);
    },

    showingVelocimeter() {
        this.actualSpeed();
        this.increaseSpeed();
        this.reducingSpeed();
    }
}

//Testando o código:
for(let i = 0; i <= 10; i++){
    console.log('-----------------------------------');
    Automobile.showingVelocimeter();   
}

// 81 - Criando um Objeto que age como uma conta bancária:
let first_Deposit = 200;
let firts_Bill = 150;

const bank_Account = {
    name: 'User',
    balance: 0,

    // Funcionalidades de um Objeto:
    deposit_TO(value) {
        if(value == NaN) return `Não é possível depositar, insira valor em Reais`;
        this.balance += value;
        console.log('Depósito feito com Sucesso');
        this.bank_Balance();
    },

    bank_Balance() {
        console.log(`Seu saldo atual da conta está em: ${this.balance}`
        );
    },

    withdrawal_TO(value) {
        if(value == NaN) return `Não é possível depositar, insira valor em Reais`;
        if(value > this.balance) return `Valor é maior que o Saldo, não é possível se retirar.`;

        this.balance -= value;
        console.log("Conta paga com sucesso!");
        this.bank_Balance();
    }
}

//Mostrando resultados:
// bank_Account.deposit_TO(first_Deposit);
// bank_Account.withdrawal_TO(firts_Bill);