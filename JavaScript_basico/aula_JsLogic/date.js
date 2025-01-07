/* Função construtora Date */

//Criando a variável que recebe a função:
const data = new Date();

//Manipulando a constante data:
console.log(data.getFullYear()); //Pega o ano que estamos.
console.log(data.getDate()); //Pega o data de hoje.
console.log(data.getDay()); //Pega o dia da semana.
console.log(data.getUTCHours()); //Pega o horário do UTC 0 nesse exato momento.
console.log(data.toISOString()); //Data completa com horário completo no estilo americano.
console.log(data.toJSON()); //Ver a diferença para o de cima
console.log(data.toString()); //Toda informação do date para minha localidade, contém: Data extenso, UTC, Horário completo.