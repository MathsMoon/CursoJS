/* Criando um temporizador para o site */

/* Seção de Variáveis Globais */
const timer = document.querySelector('.timer');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const restart = document.querySelector('.restart');
let seconds = 0;
let clock;

/* Seção de eventos */
start.addEventListener('click', function (event){
    /* OBS: 
        Preciso definir uma forma de fazer com que a cada click em pausar ou reset. 
        O valor deste P continue sendo "Iniciar", ou vire "Retomar" caso o botão de 
        pausar, especificamente tenha sido acionado.
    */
    
    timer_Start();
    start.textContent = 'Iniciar'; 
});

pause.addEventListener('click', function (event){
    stop_Timer();
    start.textContent = 'Retomar';
});

restart.addEventListener('click', function (event){
    timer_Reset();
    start.textContent = 'Iniciar'; //Reset do botão de iniciar caso não tenha sido feito.
});


/* Seção de Funções */
function getTimeFromSeconds(seconds){ //Formatando os segundo passados para que retorne no padrão 00:00
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12:false,
        timeZone: 'GMT'
    });
}

function timer_Start(){ //Iniciando o Timer
    clock = setInterval(function() {
        seconds++;
        timer.innerHTML = getTimeFromSeconds(seconds);
    }, 1000)
}

function stop_Timer(){ //Parando o Timer
    clearInterval(clock);
}

function timer_Reset() { //Resetando o Temporizador
    clearInterval(clock);
    timer.innerHTML = '00:00:00';
}

/*  PASSO A PASSO DO QUE FOI FEITO:

A primeira coisa que se deve saber é com o que devemos trabalhar, um temporizador requer que pensemos no que ele vai alterar, suas 
funcionalidades e local.

Portanto na seção de variáveis globais, definimos 4 constantes que respectivamente correspondem ao local, início, pausa e recomeço da 
atividade da função do temporizador. Como cada ação ocorre por meio da interação do usuário, o querySelector é usado, para que capture o
evento e retorne um resultado, neste caso pegaremos o evento de click para responder a certos comandos que definiram ao código como será
a interação com este objeto.

Na parte de "Seção de eventos", temos a estrutura de código que capturará a informação e utilizando uma função como resposta, trará um 
comportamento de acordo com o que foi predeterminado. Para cada evento adicionado é necessário definir o comportamento que ele vai 
ter de acordo com a interação e definir os limites dela, para que ao ser sujeita a uma operação maior, possa voltar ao comportamento
padrão. Ex: Ao clicar em reiniciar, todos os botões e valores são resetados, então quaisquer informações que foram acrescentadas do 
que antes era padrão, deixarão de existir e o site voltará ao seu "Modelo original".

A seção de funções irão garantir que cada parte do temporizador terá uma definição de comportamento, que ocorrerá da seguinte forma:

Início do Temporizador -> Pausa ou Reinício -> Pausa leva ao fim da temporização enquanto o usuário pode decidir entre Retomar de onde
parou ou reiniciar -> O reinício direto sem pause leva ao reset de toda a estrutura e comportamento.

O pause é uma condicional que leva a mudança de comportamento tanto a estrutura da contagem, como também do "Iniciar" que se transforma
no Retomar.

*/