/* Método For para arrays e listas */
const arr = [1,2,3,4,5];

let ten_Times = [];
arr.forEach((value) => {
    ten_Times.push(value * 10);
});

console.log(ten_Times);