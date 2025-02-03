/* Criando classes */
const _velocity = Symbol();

class Car {

    /* Como o javascript não possui níveis de acesso as suas variáveis
    a melhor maneira de torna-las privadas ou dificultar seu acesso via 
    get and set, é utilizando o Symbol(). 
    
    O get e o set para o javascript são mais atributos da classe do que 
    funções por isso quando forem chamadas, se utiliza o '.' e não as ()
    que referenciam as funções, por mais que elas o sejam.*/

    constructor(name) {
        this.name = name;
        this[_velocity] = 0;
    }

    /* Pegando e setando as propriedades da classe */
    get velocity() {
        return this[_velocity];
    }

    set velocity(vel) {
        if(typeof vel !== 'number') return;
        if(vel >= 101 || vel <= -1) return;
        this[_velocity] = vel;
    }

    /* Métodos da classe */

    accelerate() {
        return this.velocity++;
    }

    break() {
        return this.velocity--;
    }
}

//Criando objeto da classe Carro:
const car1 = new Car('Corsa');

//Mostrando resultado:
console.log(car1);
console.log(car1.velocity);
car1.velocity = 'oi'; //Valor ignorado
car1.velocity = '20'; //Valor ignorado por ser uma string
car1.velocity = 20; //Valor aceito por atender a todas as condições
car1.velocity = -1; //Valor ignorado por ser negativo
console.log(car1.velocity);


//Testando as funcionalidades da classe para ver se o carro fica abaixo de 0Km ou acima de 100
for (let i = 0; i < 200; i++) {
    car1.accelerate();
}
console.log(car1.velocity);

for (let i = 0; i < 200; i++) {
    car1.break();
}
console.log(car1.velocity);