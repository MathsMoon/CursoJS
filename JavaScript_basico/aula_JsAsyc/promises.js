/* Exemplo de espera que pode ocorrer no javascript.
function a_Wait(msg, time) {
    setTimeout(() => {
        console.log(msg);
    }, time);
}

a_Wait('Essa mensagem demorou 1 segundo para aparecer', 1000);
*/

//aleatorizando os tempos de execução mas respeitando a ordem:
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function timed_Msg(msg, time) {
    //Para evitar o gargalo por conta das funções, utiliza-se o promises que funciona da seguinte forma:
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg);
        }, time);
    })
}

//Making calls and selecting responses at random.
console.log(
    timed_Msg('Mensage 1', rand(1, 3)).
    then(answer => {
        console.log(answer);
        return timed_Msg('Mesage 2', rand(1, 3)); 
    }).
    then(answer => {
        console.log(answer);
        return timed_Msg('Mesage 3', rand(1, 3)); 
    }).
    then(answer => {
        console.log(answer);
    }).
    catch()
);

/* Usando o callback teríamos o mesmo resultado, mas sua eficiência entra em discussão devido 
   aos problemas que ele é capaz de gerar.

function timed_Msg(msg, time, cb) {
    setTimeout(() => {
        console.log(msg);
        if(cb) cb();
    }, time);
}

let p1 = timed_Msg('Mensage 1', rand(1, 3), function () {
    let p2 = timed_Msg('Mensage 2', rand(1, 3), function () {
        let p3 = timed_Msg('Mensage 3', rand(1, 3));
    });    
});

*/