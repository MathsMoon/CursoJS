/* Funções Construtoras */

//Criando um objeto com os atributos de uma pessoa
function Person(name, surname){
    //this serve como retorno e atribui os valores para a variável que cria o Person.
    this.Name = name; 
    this.Surname = surname;
}

//Criando as pessoas e mostrando o resultado:
const p1 = new Person('João', 'Carvalho');
const p2 = new Person('Pedro', 'Carvalho');

console.log(p1);
console.log(p2);