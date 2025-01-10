/* Sobre laços de repetição */

//Criando um array:
const nomes = ['Matheus', 'Luis', 'Pedro', 'André', 'João'];

//Criando um objeto:
const person = {
    name: nomes[0],
    age: 18,
    address: {
        street: 'ABC',
        number: 123
    }
}

//Criando uma varíavel comum:
const nome = 'Matheus Alves';

/* Tipos de for: 

    For tradicional -> Utiliza os índices e os retorna de acordo com o tipo, precisa dos statements para ser criado e executado.
    (usado com array e string)

    for in -> Lê o índice ou a chave do Objeto. Como no exemplo abaixo o for in lê as chaves do objeto person, mostrando como resultado
    o name, age e address, diferente do que seria usando o person[i], que mostraria a informação contida nessas chaves.
    (usado com string, array e objeto)

    for of -> Retorna apenas o valor através da Iteração com o objeto.
    (usado com iteráveis)

    for each -> Itera com os elementos de um conjunto de dados, seja uma lista, array ou um grupo de informações.
*/

//Mostrando resultados:

//Percorrendo um array com for tradicional:
// for (i = 0; i < nomes.length; i++) {
//     console.log(nomes[i]);
// }

//Percorrendo um objeto com For in:
// for(let i in person) {
//     console.log(`${i}: ` + person[i]);
// }

//Percorrendo uma string através da iteração com o For of:
// for (let char of nome) {
//     console.log(char);
// }

//Percorrendo o Array utilizando o forEach:
nomes.forEach(element =>{ //Criando uma função via arrow.
    console.log(element)
})