const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const getnums = () => String.fromCharCode(rand(48, 57));
const getUpperCaseLetters = () => String.fromCharCode(rand(65, 90));
const getLowerCaseLetters = () => String.fromCharCode(rand(97, 122));
const simbols = '+-*/?|\\!@#$%¨&*(){}[]><,.;:_-=+§';
const getSimbol = () => simbols[rand(0, simbols.length)];

export default function generatePassword(qtd, upc, lc, num, simb) {
    const password = [];
    qtd = Number(qtd);

    for(let i = 0; i < qtd; i++){
        num && password.push(getnums());
        upc && password.push(getUpperCaseLetters());
        lc && password.push(getLowerCaseLetters());
        simb && password.push(getSimbol());
        //randomSelector(password);
    }

    return password.join('').slice(0, qtd);
}

/* Eu quero randomizar também a aleatóriedade das posições que vem os caracteres
para diferir do padrão: Num-A-a-$.
Para que ele seja completamente aleatório também na ordem de organização.

// function randomSelector(password) {
//     const count = rand(0, 4);

//     switch(count){
//         case 1:
//             num && password.push(getnums());
//             break;
//         case 2:
//             upc && password.push(getUpperCaseLetters());
//             break;
//         case 3:
//             lc && password.push(getLowerCaseLetters());
//             break;
//         case 4:
//             simb && password.push(getSimbol());
//             break;
//     }
// }
*/