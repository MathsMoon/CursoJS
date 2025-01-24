/* Funções Callback */

/* 
Um problema grande que existe na construção de aplicações é o uso das funções, como cada funcionalidade requer um tempo de execução
isso pode gerar problemas se este processo não é estabelecido na hora. Quando utilizamos recursos externos, aumentamos o tempo de carregamento
e de espera para a execução das atividades que chamamos.

No exemplo a baixo, a princípio tivemos uma prioridade na chamada do console.log sobre as funções, como cada função possuia um tempo de chamada
diferente, o javascript coloca como prioridade as chamadas "garantidas" ou que carregam de forma mais rápida, por não dependerem de outro 
fator além de sua própria chamada.

Para contornamos a situação, podemos utilizar uma função de callback. Com esta chamada, podemos organizar as funções para que elas chamem
uma a outra, montamos uma ordem que só se executa com a chamada da função anterior, criamos uma depêndecia da função em troca dela obedecer
uma ordem. Assim eliminamos a execução de demais funções sem que sejam estabelecidos certos requisitos.

obs: versão pobre do promisses, ver posteriormente qual melhor uso:
*/

//função que retorna um tempo aleatório para o callback
function rand(min = 1000, max = 3000) {
    const time = Math.floor(Math.random() * (min - max) + min);  //Retornando um tempo entre 1 a 3 segundos
    return time;
}

//Funções:
function f1(callback) {
    setTimeout(function() {
        console.log('f1');
        if(callback) return callback();
    }, rand());
}

function f2(callback) {
    setTimeout(function() {
        console.log('f2');
        if(callback) return callback();
    }, rand());
}

function f3(callback) {
    setTimeout(function() {
        console.log('f3');
        if(callback) return callback();
    }, rand());
}

//Mostrando resultados:
f1(function (){
    f2(function (){
        f3(function (){
            console.log('Olá Mundo');
        });
    });
});

//ou:

f1(f1_Callback);

function f1_Callback() {
    f2(f2_Callback);
}

function f2_Callback() {
    f3(f3_Callback);
}

function f3_Callback() {
    console.log('Olá mundo');
}