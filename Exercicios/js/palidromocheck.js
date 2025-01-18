/* Verificação de palíndromo */

//Variáveis que recebem as palavras a serem testadas
let word_1 = 'arara';
let word_2 = 'rato';

//Função que verifica se são um Palíndromo:
function verify_Palindrome(word){
    //A variável é criada e nela se guarda a versão separada e de ordem reversa.
    let reverse_word;
    reverse_word = word.split('').reverse().join('');

    //Verificação do palíndromo:
    if(word == reverse_word){
        console.log('Iguais');
    }else {
        console.log('Não são iguais');
    }
}

//Teste da função
verify_Palindrome(word_1); //Resultado esperado: Iguais.
verify_Palindrome(word_2); //Resultado esperado: Não são iguais.