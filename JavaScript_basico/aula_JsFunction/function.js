/* Funções em geral no Javascript 

    As funções são objetos de primeira classe, tanto possuem a capacidade de receber dados e transforma-los, como elas próprias
    podem ser esses dados a serem guardados em uma variável. Ao serem inseridas como dado em uma variável, a mesma se torna a função
    e carrega tudo que é descrito dentro da função, portanto é possível se utilizar uma variável como parâmetro de outra função, tendo
    em seu conteúdo uma outra função.

    Existem diferentes tipos de declaração de função, cada uma delas com um propósito que torna melhor a sua implementação.
    O primeiro e tipo mais comum é a função declarada de forma direta:
    
    Function alguma_Coisa() {} -> esta declaração mais direta leva consigo o modelo padrão de declaração, como também faz uso do
    Hoisting, que é a elevação de prioridade ao escopo global, desta forma independente da sua posição dentro do arquivo, o seu 
    uso será assegurado e garantido devido ao alto nível de prioridade que é dada através do Hoisting.

    A outra forma mais comum é a função anônima como exemplo: 
    function () {} -> Esta função não tem nome, sendo muito utilizada para servir como escopo de alguma funcionalidade que precisamos
    sem a necessidade de criar uma função tradicional para ela, utilizamos apenas a sua estrutura para retornar ou realizar uma atividade.
    É usada muito em conjunto com as functions expressions.

    Dentre os outros tipos de funções, temos a Arrow function. Exemplo:
    const sum_arrow = (a, b) => {} -> Uma versão reduzida do modelo tradicional que tem como propriedade já a naturalidade de ser criada para
    uma variável ou parametro, seu comportamento em relação ao This se difere das demais por não se utilizar da palavra reservada function.
    
    Esta mesma palavrada dá as funções expressadas com ela algumas outras possibilidades que a arrow function não possue, um exemplo disso
    é a variável arguments, que recebe tudo que foi passado para a execução da função, um array que guarda tudo que foi descrito, sendo
    esses argumentos obrigatórios para função ou não. 
    Como resposta a chamada dessas variáveis ele pode retornar undefined, já que os parâmetros foram declarados mas não atribuídos a valor 
    algum.

    Um ponto importante para ser considerado das funções anônimas é o IIFE, como estas não podem ser chamadas, já que não são nomeadas, 
    elas possuem uma forma única de chamada que designa os valores dos parâmetros logo após a criação da mesma. Portanto as funções que não
    são atreladas a alguma outra atividade, podem ser chamadas como no exemplo abaixo:

    (function (a,b) {
        return console.log(a + b);
    })(1,2);

    Outra possibilidade em relação aos parâmetros é a utilização do parametro rest, que lida com todas as informações posteriores as aquelas
    definidas por padrão, guardando elas de forma agrupada em uma variável.
*/

//Exemplo de como a função não é presa ao escopo ou posição global:
sayHello(); //chamando a função antes de sua definição no escopo.

 //Utilização padrão de uma função:
function sayHello(){
    console.log('hello');
}

//Utilização de uma função como um FCO (First-Class Object):
const sayHi = function() {
    console.log('Hi');
}

//Chamando a variável como se fosse uma função:
sayHi();

//Função que recebe uma função:
function chat(function_var){
    function_var(); //chamando a função que está dentro da variável
    console.log('Nice to meet you'); //respondendo a função da variável
}

//Função que recebe uma variável que guarda uma função como parâmetro:
chat(sayHi);

//Criando uma Arrow Function:
const arrow_function = () => {
    console.log('Arrow Function');
};

//Chamando a arrow:
arrow_function();

//Exemplo de um parametro rest:
function calc(operator, acres, ...nums){
    console.log(operator, acres, nums);
}

//Chamada define as 2 primérias variáveis e o resto é guardado dentro do nums.
calc('+', 0, 1,2,3,3,4,4,5,6,6,7,7,8,11,9,0);
/* Resposta:
[   1, 2, 3, 3, 4, 4,
    5, 6, 6, 7, 7, 8,
    11, 9, 0
]
*/

/* Utilizando o caso do Closure 

    O closure se define pela aproximidade do código com os seus vizinhos, tudo dentro do escopo léxico possui um grau de acesso
    que quanto mais longe se torna, mais ele pode ter dificuldade de acessar ou não, neste caso temos o uso do grau closure,
    na qual a variável nome está detrno de uma função pai e é acessada pela filha e retornada.
    Devido ao parentesco no escopo, não ocorre problemas no compartilhamento de variáveis, o que ocorreria com diferentes escopos.
*/

function return_Function(name) {
    return function() {
        return name;
    }
}

//Variáveis que recebem o retorno da função
const var_function = return_Function('luis');
const var_function2 = return_Function('João');

//Retornando a informação via console no html.
console.dir(var_function);
console.dir(var_function2);