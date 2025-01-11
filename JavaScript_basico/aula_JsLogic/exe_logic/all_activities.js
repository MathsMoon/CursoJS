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

//A resposta do arrow function só funcionará após a criação da mesma, ou seja, sempre abaixo do escopo dela.
console.log(max(10, 20));


/* Segunda atividade: Uma função receberá 2 valores de uma imagem e fará uma verificação se a imagem está no modo Paisagem */
console.log('#############SEGUNDA ATIVIDADE#############\n');



/* Terceira atividade: Uma função recebe um valor, vai verificar se é um número, se é divisível por 3 ou por 5, e para as três condições
retornará diferentes resultados.

Divide por 3 = retorna "Fizz";
Divide por 5 = retorna "Buzz";
Não é dividido por nenhum = retorna o próprio número.

*/
console.log('#############TERCEIRA ATIVIDADE#############\n');