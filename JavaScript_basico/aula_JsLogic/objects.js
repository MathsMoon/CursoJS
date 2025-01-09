/* Atribuição via Desestruturação */

//Construindo pessoa: 
const person = {
    name: 'Mariane',
    surname: 'Alves',
    age: 33,
    address: {
        street: 'Rua ABC',
        number: 123
    }
}

//Extraindo determinados tipos de informação:
const {name: nome, surname: sobrenome, address: {number: numero}} = person;

//Mostrando resultado:
console.log(nome, sobrenome, numero);
//console.log(pessoa); //recebendo todas as informações