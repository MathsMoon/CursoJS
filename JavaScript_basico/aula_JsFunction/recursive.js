/* Funções recursivas */

/* Uma questão importante sobre as funções recursivas, ou, funções de auto-retorno
   são as limitações da própria engine para a linguagem, que ao reconhecer que
   este retorno pode ser infinito, impede a execução para que não ocorra um gargalo
   devido aos recursos usados a cada repetição da função
*/

function recursive (max){
    if(max >= 10) return;
    max++;
    console.log(max);
    recursive(max);
}

recursive(1);