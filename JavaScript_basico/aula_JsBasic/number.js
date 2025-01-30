//Declarando variáveis.
let num1 = 0.7;
let num2 = 0.1;

/* Manipulando Números:
    Quando manipulamos os números, alteramos apenas a forma que ele é apresentado ou visto, não o conteúdo da variável.
    Para alterar o valor da variável devemos apenas assinlar um novo valor como no exemplo abaixo:
    num1 = 12.22;    

    Funcionalidades possíveis:
    num1.toString(); -> Transforma o a variável de um number para String
    num1.toFixed(); -> define um número de casas de acordo com o parâmetro dentro do ();

    Na expressão abaixo temos a soma entre 0.1 + 0.7, o resultado lógico seria a soma dos 0,1 até formar 1 inteiro,
    mas a estrutura do javascript reconhece os números reais como se fossem dismas de 9999999999999999,
    entretanto por mais que visualmente temos como resultado o 99999 nesta soma, usando o fixed vemos corrigido que 
    por inteiro o number é reconhecido como 1. Na prática do uso de inteiros o caso é ignorado e possivelmente a 
    ínfima diferença entre os números seja ignorada e levada em consideração como o inteiro, a exemplo do 0,7
    que na teoria comportaria como: 0,6999999999999.
    
    Obs: melhor maneira de tornar um número para um tipo e através do parse, os demais meios mexem com a visualização
    do termo, não com sua estrutura.


    num1 += num2;
    num1 += num2;
    num1 += num2;

    console.log(num1.toFixed());
*/


//Mostrando resultados:
console.log(num1.toString(2)); //conversão para ver o número em binário.
console.log(num1.toFixed(2)); //Definindo apenas 2 casas decimais após a virgula.
console.log(num1.toPrecision()); //toma a mesma medida dando o valor preciso ignorando a dizma do 0,699999 teórico do número.