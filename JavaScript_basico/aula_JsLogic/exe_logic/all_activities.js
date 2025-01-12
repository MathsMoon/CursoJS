/* Primeira atividade: Criar uma função que mostre o maior valor entre 2 números. */
console.log('#############PRIMEIRA ATIVIDADE#############\n');

//Criando função:
function big_num(a, b){
    //Condicionamento If para verificar o maior valor:
    if(a === b){
        console.log('Valores iguais');
    }
    if (a > b){
        console.log(`Maior valor é ${a}`);
    } else {
        console.log(`Maior valor é ${b}`);
    }
}

//Arrow function funciona com base em uma variável que recebe o retorno de uma function.
const max = (a, b) => {
    return a > b ? a : b; 
};

//Função arrow com apenas 1 linha:
//const max = (a,b) => a > b ? a : b;

//A resposta do arrow function só funcionará após a criação da mesma, ou seja, sempre abaixo do escopo dela.
console.log("O maior valor entre os números inseridos é: " + max(20, 20));


/* Segunda atividade: Uma função receberá 2 valores de uma imagem e fará uma verificação se a imagem está no modo Paisagem */
console.log('#############SEGUNDA ATIVIDADE#############\n');

//Função arrow que recebe os valores retornando um booleano para confirmar se é true ou false:
const isInLandscapeMode = (h, w) => {
    return w > h;
};

//Função arrow com 1 linha:
//const isInLandscapeMode = (h,w) => w > h;

//Mostrando resultado:
console.log("Resposta: " + isInLandscapeMode(300,400));


/* Terceira atividade: Uma função recebe um valor, vai verificar se é um número, se é divisível por 3 ou por 5, e para as três condições
retornará diferentes resultados.

Se o valor inserido é um número;
Divide por 3 = retorna "Fizz";
Divide por 5 = retorna "Buzz";
Não é dividido por nenhum = retorna o próprio número;

*/
console.log('#############TERCEIRA ATIVIDADE#############\n');

//Declarando as variáveis de resposta:
const div3 = "Fizz";
const div5 = "Buzz";
const div3e5 = "FizzBuzz";

//Função que organiza a estrutura de resposta ao valor inserido:
function catch_FizzBuzz(num){
    //Conjunto de If's que retornam o valor correspondente:
   if (typeof num !== 'number') return NaN; //Retornar NaN para os valores não numéricos
   if (num % 3 == 0 && num % 5 == 0) return div3e5; //condição dupla que permite o avanço caso seja somente 3 ou 5.
   if (num % 3 == 0) return div3;
   if (num % 5 == 0) return div5;
   return num; //Retornando o valor inserido caso não cumpra nenhum requisito.
}

//Testando a função:
console.log(catch_FizzBuzz(1));