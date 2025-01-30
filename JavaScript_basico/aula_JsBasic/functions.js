//Funções no javaScript.
// function saudacao(nome) {
//     //Tudo escrito aqui dentro não vai ser lido ou acessado por fora, apenas retornado ou executado de acordo com os parâmetros da função.
//     console.log(`Bom dia ${nome}!`);
//     return nome;
// }

// const nome_usado = saudacao('Matheus');
// console.log(nome_usado);

//Criando uma função anônima: Quando uma variável recebe já diretamente o resultado de um return de uma função.
const raiz = function (n) {
    return Math.pow(n, 2);
};

console.log(raiz(5));

//Criando uma função anônima com arrow function:
const elev_ten = (n) => {
    return n ** 10;
};

console.log(elev_ten(10));

/*
    Dependendo do tipo de função com arrow você pode reduzir para 1 única linha o código todo.
    ex:

    const elev_ten = n => n**10;

    Já que neste exemplo temos apenas 1 parâmetro e 1 linha com return, em casos similares podemos retirar as {} ou até mesmo
    simplificar para chegarmos nestes termos.
*/