/* Estrutura de Dados Map */

const persons = [
    {ID: 1, name: 'Luis'},
    {ID: 4, name: 'Douglas'},
    {ID: 3, name: 'Alberto'},
    {ID: 2, name: 'Ricardo'},
]

//Organizando a lista de pessoas pelo ID:


/* A melhor forma de organizarmos uma lista de objetos, mas sem que isso altere a ordem original
desta lista é via map, no exemplo abaixo temos organizado a lista de forma crescente por padrão 
do javascript:

const new_persons = {};

for(const person of persons) {
    const { ID } = person;
    new_persons[ID] = { ...person};
}

Para que possamos ordenar via ID e manter a ordem original, será necessário iterar sobre os elementos
criando então uma nova resposta que mantenha a ordem, para isso utilizaremos o map como demonstrado a 
seguir
*/

//Utilizando o Map, organizamos a lista agora da forma original dos objetos e mantemos as chaves e os valores como definimos:
const new_persons = new Map();

for(const person of persons) {
    const { ID } = person;
    new_persons.set(ID, {...person}); //Setando os valores para este novo Map.
}

//Para retornar o valor específico, basta utilizar o new_persons.get(numeroID).
console.log(new_persons);
console.log(new_persons.get(2));