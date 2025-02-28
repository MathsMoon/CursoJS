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
const community = [
    {Name: 'Amélia', Age: 55},
    {Name: 'Antônio', Age: 67},
    {Name: 'Aparecida', Age: 88 },
    {Name: 'Afonso', Age: 90 },
]

//Obs: Uma boa prática nesta junção crua, é rever as propriedades e reorganizar o novo objeto com os parâmetros.
function grouping_Objects(Obj1, Obj2) {
    return new_Obj = {...Obj1, ...Obj2};
}

//Mostrando o resultado:
//console.log(grouping_Objects(generic, community));

/*  131 - Implemente uma função que aceite dois arrays. O primeiro
array é uma lista de objetos com uma chave e valor, e o segundo é uma
lista de chaves. A função deve retornar um novo array de objetos contendo
apenas as chaves especificadas no segundo array.

Descrição: Este exercício desafia os alunos a filtrar objetos com base em um conjunto
especificado de chaves. Através disso, eles aprenderão sobre a manipulação de
objetos e a importância de iterar corretamente sobre eles para alcançar o resultado
desejado.
*/
const any = [['c', 'a', 'd', 'b'], [1,2,3,4]];
const correct = ['a', 'b', 'c', 'd'];

/* Arrumar depois */
// function filtrarPorChaves(arrayObjetos, chaves) { 
//     return arrayObjetos.map(obj => 
//       chaves.reduce((novoObj, chave) => {
//         if (obj[chave] !== undefined) novoObj[chave] = obj[chave];
//         return novoObj;
//       }, {})
//     );
//   }  

// const newa = filtrarPorChaves(any, correct);
console.log(newa);

// Agrupando 2 arrays em 1 só array:
const arr3 = (arr1, arr2) => [...arr1, ...arr2];
//console.log(arr3([1,2,3,4,5],[6,7,8,9,10]));

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

const person = {name: 'MAB', age: 20, addres: {street: 'Rua Beato Carlos 1', numb: 1}, ID: 12};
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
    const {addres: {street, numb}} = obj; 
    return {
        street,
        numb
    };
}

//Mostrando resultado:
// console.log(extracting_Address(person));

// 135 - Desestruturando parâmetros de uma função:
function destructuring_Obj({name, ID}){
    return `Nome: ${name} \nID: ${ID}`;
};

//Mostrando resultado:
//console.log(destructuring_Obj(person));

// 136 - Desestruturando usando Rest:
function destructuring_WithRest(num1, num2, num3, ...rest){
    return [num1,num2,num3, rest];
}

//Mostrando resultado:
//console.log(destructuring_WithRest(1,2,3,4,5,6,7,8,9,10,11,12));

// 138 - Desestruturando um Array Aninhado:
const arr = [1,2,3,[4,[5],6],8,9,10];

//Extraindo valores de uma Array Aninhado (2 elemento do 1 array e o 1 elemento do 3 array):
function extracting_Array(arr){
    const num1 = arr[3][0];
    const num2 = arr[3][1][0];
    return [num1, num2];
}

//Mostrando resultado:
//console.log(extracting_Array(arr));