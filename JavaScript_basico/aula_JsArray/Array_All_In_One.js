/* Atividade básica
    Crie um array com 10 números de 1 a 100.
    pegue todos os números pares com filtro.
    dobre o valor destes números com map.
    e mostre a soma de todos eles com reduce.
*/

const array = Array.from({length: 11}, () => Math.floor(Math.random() * 100));
const All_In_One = array.filter(num => num % 2 == 0).map(num => num * 2).reduce((acc, value) => acc + value);

console.log(array);
console.log(All_In_One);