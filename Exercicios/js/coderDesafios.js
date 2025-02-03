/* Desafios do curso de Funções da CODER */

//Desafio #1 - Função de Range:

function range(num, max, btw_num = 1) {
    //Definição das variáveis
    const n1 = max == undefined ? 1: num; //Caso o max seja vazio recebe 1 ou o próprio número.
    const n2 = max == undefined ? num: max; 
    const step = n1 <= n2 ? Math.abs(btw_num) : - Math.abs(btw_num); //Ele inverte a lógica do For para caso o valor seja de incrementação ou não
    const nums = [];
    
    //Lógica do For para que se comporte de acordo com o max e o num
    for(let i = n1; n1 <= n2 ? i <= n2 : i >= n2; i += step) {
        nums.push(i);
    }
    
    //retornando o array com os resultados
    return nums;
}

//Mostrando o resultado:
// console.log(range(5));
// console.log(range(6, 11));
// console.log(range(10,19, 2));
// console.log(range(6, 2));
// console.log(range(8, -3, 4));

//Desafio #2 - Manipulando as informações de um Carrinho.

/* Utilizando o Filter, Map e Reduce. Pegue o objeto abaixo do carrinho e:
- Filtre e mostre todos que são frágeis. 
- Depois pegue todos os produtos e ordene por Quantidade * preço para saber a média de cada produto.
- Com o preço de todos os produtos, cálcule a média Total de todos os produtos */

const shopList = [
    { name: 'Caneta', amount: 10, price: 7.99, fragile: true},
    { name: 'Impressora', amount: 1, price: 649.50, fragile: true},
    { name: 'Caderno', amount: 4, price: 27.10, fragile: false},
    { name: 'Lapis', amount: 3, price: 5.82, fragile: false},
    { name: 'Tesoura', amount: 1, price: 19.20, fragile: true}
];

//Filtrando os objetos frágeis da lista:
const fragiles = shopList.filter(obj => obj.fragile == true);

//Mapeando todo os produtos por qtd e retornando a média de cada um:
const prods_Average = shopList.map(obj => ((obj.amount * obj.price)/obj.amount));
console.log(prods_Average);

//Retornando o valor da média total de todos os produtos:
const total_Average = 1;