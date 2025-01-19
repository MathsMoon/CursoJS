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

console.log(return_PrimeNum(100));

//Próximas a serem feitas: 65, 67, 74, 87 ao 102.