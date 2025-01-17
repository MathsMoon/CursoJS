/* Criando um temporizador para o site */

/* Seção de Variáveis Globais */
const timer = document.querySelector('.timer');
const start = document.querySelector('.start');
let seconds = 0;
let clock;

/* Seção de eventos */

document.addEventListener('click', function(e){
    //criando uma variável que receberá o elemento do evento clicado.
    const element = e.target;

    //Condições para que a cada botão clicado (especificado pela classe que define ele) execute o seu comportamento padrão.
    if(element.classList.contains('start')){
        //Chamada da função que inicia o click:
        timer_Start();
        start.textContent = 'Iniciar'; 
    }
    if(element.classList.contains('pause')){
        stop_Timer();
        start.textContent = 'Retomar';
    }
    if(element.classList.contains('restart')){
        timer_Reset();
        start.textContent = 'Iniciar'; //Reset do botão de iniciar caso não tenha sido feito.
    }
});

/* Seção de Funções */
function getTimeFromSeconds(seconds){ //Formatando os segundo passados para que retorne no padrão 00:00
    //pegando a data e colocando ela em segundos através de uma multiplicação
    const data = new Date(seconds * 1000);

    //Retornando a formatação no estilo padrão gmt (para que fique 00:00:00) com contador em 24 horas.
    return data.toLocaleTimeString('pt-BR', {
        hour12:false,
        timeZone: 'GMT'
    });
}

function timer_Start(){ //Iniciando o Timer
    //Previne do start incrementar infinitamente seconds a mais na variável fechando todos os processos anteriores
    clearInterval(clock);

    //Removemos a classe paused que deixa o timer em vermelho, que é usado somente no pause.
    timer.classList.remove('paused');

    //Iniciando o relógio do temporizador através de uma incrementação a variável de segundos.
    clock = setInterval(function() {
        seconds++;
        timer.innerHTML = getTimeFromSeconds(seconds); //adicionando ao parágrafo
    }, 1000);
}

function stop_Timer(){ //Parando o Timer
    timer.classList.add('paused');
    clearInterval(clock); //limpa o intervalo e pausa o temporizador no segundo que foi salvo a última alteração em sec.
}

function timer_Reset() { //Resetando o Temporizador
    //Limpando o intervalo setado
    clearInterval(clock);

    //Removemos a classe paused que deixa o timer em vermelho, que é usado somente no pause.
    timer.classList.remove('paused');

    seconds = 0; //toda reinicialização o contador vai para o zero, para que possa recomeçar a contagem
    timer.innerHTML = '00:00:00'; //Voltando o parágrafo ao padrão 00:00:00.
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

Pode-se utilizar uma única estrutura de evento para que a página não seja sobrecarregada com o comando de reação aos eventos de click
assim pegamos o click e verificamos qual ação é pelo que contém no objeto clicado, assim reduzimos o número de eventos.

A seção de funções irão garantir que cada parte do temporizador terá uma definição de comportamento, que ocorrerá da seguinte forma:

Início do Temporizador -> Pausa ou Reinício -> Pausa leva ao fim da temporização enquanto o usuário pode decidir entre Retomar de onde
parou ou reiniciar -> O reinício direto sem pause leva ao reset de toda a estrutura e comportamento.

O pause é uma condicional que leva a mudança de comportamento tanto a estrutura da contagem, como também do "Iniciar" que se transforma
no Retomar.

*/