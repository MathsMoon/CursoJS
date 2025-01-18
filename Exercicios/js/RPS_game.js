/* Clássico do Pedra, Papel e tesoura */

//Construção da array que carrega os nomes e do statement que proteje o Loop do jogo.
const RPS = ['Pedra', 'Papel', 'Tesoura'];
let game_Continue = true;

function RPS_Game() {
    //Criando a variável que armazena o número de tentativas:
    let attempts = 0;

    do {
        //Organizando a aleatoriedade dentre os valores do jogo
        let computer_Numb = Math.floor(Math.random() * RPS.length);
        let player_Numb = Math.floor(Math.random() * RPS.length);

        //Variáveis que recebem a palavra que define o jogo
        let computer_Choise;
        let player_Choise;

        //Método que pega os nomes das opções do jogo dentro do array de RPS
        switch(computer_Numb){
            case 0:
                computer_Choise = RPS[0];
                break;
            case 1:
                computer_Choise = RPS[1];
                break;
            default:
                computer_Choise = RPS[2];
        }

        switch(player_Numb){
            case 0:
                player_Choise = RPS[0];
                break;
            case 1:
                player_Choise = RPS[1];
                break;
            default:
                player_Choise = RPS[2];
        }

        //Verificação de cada tipo de jogada que concede vitória ao jogador, as demais situações culminam em empate ou vitória para a máquina
        if ((player_Choise == "Pedra" && computer_Choise == "Tesoura" ) ||
            (player_Choise == "Papel" && computer_Choise == "Pedra" ) ||
            (player_Choise == "Tesoura" && computer_Choise == "Papel" )) {
            
            //Vitória e encerramento do jogo:
            console.log("Usuário ganhou!");
            game_Continue = false;

        } else if(player_Choise == computer_Choise) {
            //Continua caso empate
            console.log("Empate");
        } else {
            console.log("Computador ganhou!");
            game_Continue = false;
        }

        //Iteração do Loop para cada tentativa:
        attempts++;

    } while (game_Continue);
    
    console.log('Número de tentativas: '+ attempts);
}

//Chamando o jogo:
RPS_Game();