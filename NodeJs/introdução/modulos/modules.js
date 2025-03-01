const name1 = 'abe';
const age = 33;
const sum = (x,y) => x+y;

//Exportando via NodeJs.
exports.Name = name1;
exports.Age = age;
exports.Sum = sum(1,2); //Irá exportar o resultado, não a função.

console.log(module.exports); //Mostrando os módulos que estão sendo exportados