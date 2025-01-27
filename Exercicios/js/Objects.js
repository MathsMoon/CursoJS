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
    ActualSpeed: 0,
    MaxSpeed: 200,
    MinSpeed: 10,
    
    /* Revisar o código abaixo para que se cumpra o que é pedido:

    - A velocidade do increase deve ser sempre maior que a atual.
    - A velocidade de redução sempre será menor que a atual.
    */

    actualSpeed() {
        this.ActualSpeed = Math.floor(Math.random() * (this.MaxSpeed + this.MinSpeed) - this.MinSpeed);
        if(this.ActualSpeed < 0) this.ActualSpeed += this.MinSpeed;
        console.log(`Velocidade Atual: ${this.ActualSpeed} Km/h`);
    },

    increaseSpeed() {
        let maximum = this.ActualSpeed + Math.floor(Math.random() * (this.MaxSpeed - this.ActualSpeed) - this.ActualSpeed);
        if(maximum == this.MaxSpeed) maximum = this.MaxSpeed;
        console.log(`Aumentando a velocidade Para: ${maximum} Km/h`);
    },

    reducingSpeed() {
        let minimum = this.ActualSpeed - Math.floor(Math.random() * (this.MinSpeed - this.ActualSpeed) - this.MinSpeed);
        if(minimum < this.MinSpeed) minimum = this.MinSpeed;
        console.log(`Reduzindo a velocidade para: ${minimum} Km/h`);
    },

    showingVelocimeter() {
        this.actualSpeed();
        this.increaseSpeed();
        this.reducingSpeed();
    }
}

//Testando o código:
for(let i = 0; i <= 5; i++){
    console.log('-----------------------------------');
    Automobile.showingVelocimeter();
    
}
// 81 - Criando um Objeto que age como uma conta bancária: