/*
    É extremamente recomendável para o JavaScript declarar suas variáveis com let ou const, para não enfrentar problemas futuros com
    variáveis globais.

    o var é uma forma antiga de declaração de variáveis, foi substituído pelo let que é mais atualizado e corrige problemas 
    crônicos do var, hoje as duas formas utilizadas para declaração é o let e const para as constantes.
*/

//Declarando variável

const nome = "Matheus"; //Criando uma constante
var idade = 20; //Uma versão mais antiga para criar uma variável, hoje se usa o let.

//Me descrevendo com variáveis.

console.log(`Oi, meu nome é ${nome}. Eu tenho ${idade} anos, pois nasci em: ${(2024 - idade)}.`);

//verificando o tipo da variável:

console.log(typeof nome);
console.log(typeof idade);

/*
    Operadores da Aritmética
    + -> Soma/Concatenação
    * -> multiplicação
    ** -> Potenciação
    % -> Resto da divisão
    / -> Divisão

    convertendo um tipo de number a outro tipo number:
    parsetipodesejado(valor);
*/