/* Atividades gerais de Funções */

// 113 - A partir de um array como ['maçã', 'banana', 'uva'], a função deve retornar: "1. maçã, 2. banana, 3. uva".
function mapFruit(...fruit){
    /* 
        O map serve para percorrer o array e permite dentro dele a criação
        de funções, nesta criamos uma arrow function com item e index, separando
        as duas informações principais: os itens do array e seu index.
        Depois só concatenar as informações com template Strings
    */
    return fruit.map((item, index) => `${index + 1}. ${item}`).join(', ');
}

//Mostrando o resultado:
let fruits = mapFruit('Banana', 'Maçã', 'Uva');
//console.log(fruits);

// 118 - Retorne a soma de todas os valores dentro de um Arrow com array function:
const array_sum = (...sum) => sum.reduce((acc, curr) => acc + curr, 0);
//console.log(array_sum(1,2,3,4,5)); 

// 124 - Cópia profunda de Objetos:
const generic = {
    statement1: 'value1',
    statement2: 'value2',
    statement3: 'value3',
}

function copyingObj(obj) {
    return {...obj};
}

//Mostrando o resultado:
//console.log(copyingObj(generic)); //Objeto copiado e completamente diferente do generic padrão.
generic.statement1 = 'value4';
//console.log(generic);

// 127 - Mesclando dois objetos para se tornarem 1 só:


/*  131 - Implemente uma função que aceite dois arrays. O primeiro
array é uma lista de objetos com uma chave e valor, e o segundo é uma
lista de chaves. A função deve retornar um novo array de objetos contendo
apenas as chaves especificadas no segundo array.

Descrição: Este exercício desafia os alunos a filtrar objetos com base em um conjunto
especificado de chaves. Através disso, eles aprenderão sobre a manipulação de
objetos e a importância de iterar corretamente sobre eles para alcançar o resultado
desejado.
*/

function grouping_Arrays(arr1, arr2) {
    if(arr1 || arr2 != typeof Array) return `Ambos os valores precisam ser arrays`;
    arr1.map((item, index) => arr1);
}


// 132 - Desestruturando um Objeto e criando outro
const extracting_Obj = { 
    state1:generic.statement1,
    state2: generic.statement2
}

//console.log(extracting_Obj); //recebe certos statements do generic.

// 132.2 - Função que cria um objeto e retorna seus valores:
function extracting_Statements(person){
    const {name, age} = person;
    return `Meu nome é: ${name}, tenho ${age} anos de idade`;
}

const person = {name: 'MAB', age: 20, addres: {street: '123', numb: 1}, ID: 12};
//console.log(extracting_Statements(person));

// 133 - Desestruturando um Array:
function extracting_Values(...array){
    //Extraindo os 3 primeiros valores, caso não possua valor, substitui por 'Null':
    const [num1 = 'null', num2 = 'null', num3 = 'null'] = array;
    return [num1, num2, num3];
}

//Mostrando o resultado:
//console.log(extracting_Values(1,2,3,4));

// 134 - Desestruturando um Objeto Aninhado:
function extracting_Address(obj) {

}

// 138 - Desestruturando um Array Aninhado:
const matriz = [
    [1,2,3]   , [4,5,6]   , [7,8,9],
    [10,11,12], [13,14,15], [16,17,18],
    [19,20,21], [22,23,24], [25,26,27]
]

function extracting_Arrays(matriz) {
    //alcando o valor específico dentro de um Array de Arrays:
    
}