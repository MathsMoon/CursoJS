/* Métodos úteis para os Objetos */

//Copiando o objeto e não sua referência na memória:
const produto1 = {name: 'Arroz', price: 8.50, transportadora: 'Meruem Lg.'};
const produto2 = {
    ...produto1,
    transportadora: 'Barbosa Logi.'
}; //Utilizando o Spreed
const produto3 = Object.assign({}, produto1, {transportadora: 'L.A Logística'}); //Utilizando uma função própria do Objeto

// console.log(produto1);
// console.log(produto2);
// console.log(produto3);

//Mostrando as propriedades de um objeto:
console.log(Object.keys(produto1));

//Tornando o objeto inalterável:
Object.freeze(produto2);

//Mostrando quais são as configurações de definição de propriedade de um objeto:
console.log(Object.getOwnPropertyDescriptor(produto3, 'transportadora'));

//Mostrando os valores de um objeto:
console.log(Object.values(produto1));
console.log(Object.values(produto2));
console.log(Object.values(produto3));

/* Mostrando os valores e propriedades em forma de array:
   O bom deste entries é a possibilidade de iterar sobre os valores e também
   as chaves de um objeto, assim podemos desestrutura-las e para cada 
   parte de um objeto tornar mais fácil a manipulação caso necessário
*/

// console.log(Object.entries(produto1));
for (const [key, value] of Object.entries(produto2)) {
    console.log(key, value); //Os valores estão desestruturados em 2 valores separados, podendo ser manipulados.
}