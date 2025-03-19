/* Algumas atividades de Array */

//Criando um array com 5 itens que será usado como base para as atividades.
const array = [1,2,3,4,5];

/* Invertendo um Array */
function invert_Array(){
    //o array é comparado e reorganizado de acordo com os elementos do array, enquanto o salvo for positivo, ele permanecerá na frente
    return array.sort((a, b) => b - a);
}

//Mostrando o resultado:
// console.log(invert_Array());

/* Pegando o menor valor de um Array */

//Retornando o menor valor dentro do elemento array:
function smallest_One(){
    //Com a biblioteca do Math podemos utilizar o min para receber o menor valor dentro do array, o mesmo funciona com o Max.
    return Math.min(...array);
}

//Mostrando resultado:
// console.log(smallest_One());

/* Somando os números impares de um Array */

function sum_ofOdds() {
    //Criando a variável que recebe o valor total da soma
    let total_Sum = 0;

    //For clássico que recebe o valor do array e soma pelo índice extraido.
    // for(let i = 0; i < array.length; i++){
    //     if(array[i] % 2 !== 0){
    //         total_Sum += array[i];
    //     }
    // }

    /* Explicação: 
    A função sum_ofOdds usa o método reduce do array, que executa uma
    função redutora para cada elemento do array, resultando em um único valor de saída. A
    função redutora recebe a soma atual e o próximo número, e retorna a nova soma. Se o
    número é ímpar (num % 2 !== 0), ele é adicionado à soma; caso contrário, a soma
    permanece inalterada.
    */
    
    return array.reduce((soma, num) => num % 2 !== 0 ? soma + num : soma, 0);
}

//Mostrando resultado:
// console.log(sum_ofOdds());

/* Somando os números Pares de um Array */

function sum_ofEvens() {
    return array.reduce((soma, num) => num % 2 == 0 ? soma + num : soma, 0);
}

//Mostrando resultado:
// console.log(sum_ofEvens());

/* Duplicando os valores de um array */

function duplicate_Array() {
    //Mapeando todo o array, temos o método que para cada iteração com os elementos do array, o multiplica por 2.
    return array.map(num => num * 2);
}

//Mostrando resultado:
// console.log(duplicate_Array());

/* Elevando ao quadrado os valores de um array */

function pow_Array() {
    return array.map(num => Math.pow(num, 2));
}

// console.log(pow_Array());

/* Inserindo valores primos em um array */

function return_PrimeNum(num) {
    let primes = [];

    for(let i = 2; i <= num; i++){
        if(isPrime(i)){
            primes.push(i);
        }
    }

    function isPrime(num) {
        for(let i = 2; i < num; i++){
            if(num % i == 0){
                return false;
            }
        }    
        return num > 1;
    }
    return primes;
}

//console.log(return_PrimeNum(100));

// 65 - Somando todos os valores do array em um callback até acabar:
const sum = array.reduce((acc, value) => acc += value);
//console.log(sum);

/* 67 - Escreva uma função que aceite uma função de callback e um
array de arrays, e retorne um novo array que contém os resultados de
aplicar a função de callback a cada array. 

Neste exercício, você deve criar uma função de alta ordem que receba uma
função de callback e um array de arrays como argumentos, e retorne um novo array que
contenha os resultados de aplicar a função de callback a cada array.
*/

function newArray(callback, arr) {
    
}


// 87 - Pegue 2 Arrays, combine os dois e pegue os números que são dividos por 5:
const array2 = [10,11,12,13,14,15];

function returning_Sum(arr1, arr2) {
    const arr3 = [...arr1, ...arr2];
    let array = arr3.filter(value => value % 5 == 0);
    return array;
}

//Mostrando resultado:
//console.log(returning_Sum(array, array2));

// 102 - Pega um array de Strings, una todos em 1 só string separadas por ',':
/* PS: Irei tornar mais difícil, vou pegar um objeto, filtrar apenas os nomes e 
fazer o que é pedido. 
PS2: achei que seria mais difícil...
*/
const Users = [
    {username:'Huimuode', email: 'Huimuode@com'},
    {username:'Guogyogi',  email: 'Guogyogi@bom'},
    {username:'Ricardo',  email: 'Ricardo@bom'},
    {username:'Hegus',  email: 'Hegus@tom'},
    {username:'OtáviO',  email: 'Otávio@fom'},
    {username:'Xoexa',  email: 'Xoexa@fom'},
    {username:'????????????',  email: '????????????@com'},
    {username:'Fimehe',  email: 'Fimehe@pom'},
];

//Mostrando Resultado:
names = Users.map(obj => obj.username).join(', ');
//console.log(names);