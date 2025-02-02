/* Mostrando quais as vantagens do uso da Factory Functions
com os prototypes */

/* A primeira forma de utilizar os prototypes de forma separada da função factory
apesar de bastante útil, ainda possuí problemas caso seja necessário individualmente 
cuidar de cada função: */
// const person_Prototype = {
//     talk() {
//         console.log(`${name} is talking.`);
//     },

//     walk() {
//         console.log(`${name} is walking.`);
//     },

//     fullName() {
//         console.log(`My fullname is: ${name} ${surname}`);
//     }
// }


/* Segunda forma de utilizar os prototypes, separando as funções para que cada chamada seja 
delegada ao Assing do objeto, assim podemos ir manipulando separadamente cada função e chamando-a
via delegação.*/

const talk = function() {
    console.log(`${name} is talking.`);
};

const walk = function(){
    console.log(`${name} is walking.`);
};

const fullName = function() {
    console.log(`My fullname is: ${name} ${surname}`);
};

//Delegando via Object:
const person_Prototype = Object.assign({}, talk, walk, fullName);

function CreatePerson(name, surname) {

    /* Este é um meio de conseguirmos organizar os prototypes dentro da função factory,
    mas temos formas muito mais simples e responsivas para utilizar a delegação dos prototypes. */
    // const person_Prototype = {
    //     talk() {
    //         console.log(`${name} is talking.`);
    //     },

    //     walk() {
    //         console.log(`${name} is walking.`);
    //     },

    //     fullName() {
    //         console.log(`My fullname is: ${name} ${surname}`);
    //     }
    // }

    return Object.create(person_Prototype, {
        name: {
            enumerable: true,
            writable: false,
            configurable: false,
            value: name
        },
        surname: {
            enumerable: true,
            writable: false,
            configurable: false,
            value: surname
        }
    });
}

//Criando pessoa:
const p1 = CreatePerson('Dabri', 'Costa');

//Mostrando as funcionalidades:
p1.fullName();
p1.walk();
p1.talk();