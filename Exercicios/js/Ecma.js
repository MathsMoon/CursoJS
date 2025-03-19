/* Todas as atividades relacionadas ao ES6+ */

//Gerando números aleatórios:
function generateNumsForArray(nums) {
    const arr = [];

    for(let i = 0; i < nums; i++) {
        arr.push(Math.floor(Math.random() * (1001 - 1) + 1));
    }
    
    return arr;
}


// 172 - Filtro voltando apenas números impares:
function filtringOddNums(arr) {
    return arr.
    map(value => value % 2 !== 0 ? value : null).
    filter(num => num !== null);
}

console.log(filtringOddNums(generateNumsForArray(10)));

// 173 - 
// 174 -
// 172 -
// 177 -
// 179 -
// 180 - 
// 181 -
// 182 -
// 185 -