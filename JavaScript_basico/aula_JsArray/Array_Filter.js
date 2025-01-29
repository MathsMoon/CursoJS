/* Função Filter */

//Pegando um array e retornando valores maiores que 65:
const array = [];
for (let i = 0; i <= 20; i++) {
    array[i] = Math.floor(Math.random() * (1 + 100) - 1);
}

/* Esta seção abaixo continuará no texto para que fique registrado o caminho percorrido para
    a simplificação da função filter, para se comprender a lógica utilizada corretamente, segui
    cada passo tomando cuidado com o que cada parte do código tem de responsabilidade, para que
    ao se reduzir o código de forma eficiente, não se perca a lógica que levou aquele processo.

    Primeira coisa a ser destacada é o uso das funções anônimas, o filtro por padrão já interage
    com os valores como se fosse um For, portanto podemos já buscar dinâmicamente apenas guardar
    os valores e resultados esperados.

    No exemplo abaixo foi utilizado uma arrow function que retorna já o statement:
    Se o número que está sendo verificado for maior que 65, será adicionado a variável que agirá
    como array, guardando todos os números passados.
*/

//Filtrando os valores e guardando em um novo array:
const filtred_Array = array.filter(num => num > 65);

//Mostrando resultados:
// console.log(array); //Array não filtrado.
// console.log(filtred_Array) //Array filtrado.

/* A próxima atividade consiste em extrair objetos em específico de um array que 
contém determinados valores que serão pesquisados pelo filtro. */

const Users = [
    {username:'Luis', email: 'Luis@com'},
    {username:'Maria',  email: 'Maria@com'},
    {username:'Ricardo',  email: 'Ricardo@com'},
    {username:'Maximiliano',  email: 'Maximiliano@com'},
    {username:'Otávio',  email: 'Otávio@com'},
    {username:'Marcos',  email: 'Marcos@com'},
    {username:'Heitor',  email: 'Heitor@com'},
    {username:'Amélia',  email: 'Amélia@com'},
];

//Filtrando por 5 letras ou mais no nome:
const big_Then5 = Users.filter(namebig => namebig.username.length > 8);

console.log(big_Then5);