/* Estrutura de Dados Map */

const persons = [
    {ID: 1, name: 'Luis'},
    {ID: 2, name: 'Ricardo'},
    {ID: 3, name: 'Alberto'},
    {ID: 4, name: 'Douglas'},
]

//Organizando a lista de pessoas pelo ID:
const new_persons = {};

//Caso o objeto tenha muitas propriedades, uma maneira mais fácil de realizar o mesmo procedimento seria:
for(const person of persons) {
    const { ID } = person;
    new_persons[ID] = { ...person};
}

console.log(new_persons);