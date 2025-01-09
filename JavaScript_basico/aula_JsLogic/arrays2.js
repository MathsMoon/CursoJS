/* Atribuição via desestruturação */

//Estruturando o array:
let a = 'A';
let b = 'B';
let c = 'C';

//desestruturação e resignação de valor:
//[a, b, c] = [1,2,3];
const nums = [1,2,3,4,5,6,7,8,9,10];
const [num1, num2, num3, ...resto] = nums; //assinalando os valores de acordo


//Mostrando o resultado:
//console.log(num1, num2, num3);
//console.log(resto);

//Array de Arrays:
const num = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(num[1][1]);