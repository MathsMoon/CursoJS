/* Intervalo e TimeOut */

//função que retorna a hora atual:
function return_HourNow(){
    let data = new Date(); //criando hora
    return data.toLocaleTimeString('pt-BR'); //retornando no estilo PT-BR, time zone do brasil.
}

/* Para que a função do retorno do horário funcione de forma a ser chamada continuamente, o setInterval
precisa receber na sua chamada uma função que se encarrega de ser a "solicitação de execução", ou seja, 
uma função que será acionanda pelo setInterval para que a cada vez que ela for confirmada, todas as chamadas
dentro desta função executem, por hora só temos a função de retorno do horário. E é isso que ela vai retornar.

Usamos então uma função anônima dentro do setInterval para realizar essa chamada, como demosntra abaixo.

Para pausar o retorno do setInterval, já que ele apenas recebe de quanto em quanto tempo acionar, e não tem um limite
usamos o setTimeOut para ser chamado uma única vez e encerrar o processo do setInterval.

O setTimeOut funciona executando uma determinada linha de código com tempo pré-determinado na chamada desta função.
*/

//Definindo uma variável que vai receber o set via função anônima de chamada, junto ao intervalo para cada chamada. 1000 -> 1s
const timer = setInterval(function () {
    console.log(return_HourNow());
}, 1000);

//Definindo o setTimeOut para encerrar toda a chamada do setInterval. 5000 -> 5s
setTimeout(function () {
    clearInterval(timer); //Limpando o set inserido no timer.
}, 5000);