/* Tentando deduzir o número de forma binária */

//Primeiro se define as variáveis que serão os delimitadores para o jogo
let max_limit = 100;
let min_limit = 1;

//Logo após definimos os números sorteandos para que a máquina encontre o número.
const number_tbGuessed = Math.floor(Math.random() * ((max_limit - min_limit) + min_limit));
let binary_Guess = Math.floor(Math.random() * ((max_limit - min_limit) + min_limit));

//Variável que conta o número de tentativas
let attempts = 0;

//Função que guarda o esquema do jogo
function guessing_Game() {
    /* 
    A lógica deste jogo funciona da seguinte forma:
    enquanto o número a ser encontrando for diferente do que a máquina tenha chutado ser, a máquina irá alterando continuamente 
    o limite máximo e mínimo para que a cada chute se aproxime do número a ser descoberto. e logo após a passada na verificação
    o computador faz uso novamente da geração aleatória de resultados com os valores do máximo e mínimo alterados.
    */

    //Loop que faz com que a cada lance, os padrões dos delimitadores sejam reorganizados para um novo chute:
    while(binary_Guess != number_tbGuessed){

        //Verificação se o delimitador máximo ou mínimo deve ser alterado
        if(binary_Guess > number_tbGuessed){
            max_limit = binary_Guess;
        } else {
            min_limit = binary_Guess;
        }

        //Teste para observar o comportamento dos números, para caso algo saia do esperado:
        // console.log(binary_Guess);
        // console.log(number_tbGuessed);
        
        //Refazendo o lance do chute para a próxima tentativa
        binary_Guess = Math.floor(Math.random() * ((max_limit - min_limit) + min_limit));
        attempts++; //variável acumula tentativas para mostrar quantas foram necessárias ao final do jogo.
    }

    //Resultados:
    console.log('O número pensado foi: ' + number_tbGuessed + ", resposta da máquina: " + binary_Guess);
    console.log('Número de tentativas: '+ attempts);
}

//Chamando a função:
guessing_Game();