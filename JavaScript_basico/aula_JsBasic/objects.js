//Objetos em JavaScript. 
//Obs: o mesmo princípio do array pode ser usado com objetos, se cria da mesma forma que um array, só que com {};

const pessoa = {
    name: 'Marcos',
    age: 35,
    job: 'Engenheiro'
};

//Função que cria pessoa:
function criaPessoa(name, age, job) {
    return {name, age, job};
}

//Criando uma variável que carrega um objeto:
let pessoa2 = criaPessoa('Matheus', 21, 'Programador');

//Resultados:
console.log(pessoa);
console.log(pessoa2);