/* Estruturas de Repetição */

//Definindo valores padrão de Min e Max:
const max = 100;
const min = 0

//Criando uma função que gera números aleatórios:
function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

//Variável que recebe o retorno do número aleatório
let rand = random(min, max);

//Loop que verifica se a condição se tornou igual ou menor a 10:
// while(rand !== 10) {
//     //Variável será alterada até que a condição seja satisfeita:
//     rand = random(0, 100);

//     //mostra o resultado:
//     console.log(rand);
// }

//Loop que permite a ação antes da verificação:
do {
    rand = random(min, max);
    console.log(rand);
} while (rand > 10);