//Trocando os valores: B C A

let a = "a";
let b = "b";
let c = "c";
// let reg;

//Realizando as trocas para que fique BCA -> Primeira tentativa.
// reg = a;
// a = b;
// b = c;
// c = reg;

//Novo método usando apenas array -> Aprendi na aula.
[a, b, c] = [b, c, a];

//Mostrando o resultado:
console.log(a, b, c);