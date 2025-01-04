//Arrays
let alunos = ['João', 'Lucas', 'Mariane', 'Matheus', 'Luísa'];
let alunos2 = [...alunos]; //Eu fiz uma cópia da lista de alunos, agora se eu alterar o alunos, ele não afetará o alunos 2.
//Já que ele não está referenciando o mesmo valor na memória, mas copiou o valor da lista e criou uma própria.

//Funcionalidades com arrays:
alunos.push('Maria'); //Insere mais um nome a lista na última posição.
alunos.unshift('Marcos'); //Insere mais um nome no começo da lista.

let removidolast = alunos.pop(); //remove o último nome na lista do array, é possível guardar este nome em uma variável.
let removidofirst = alunos.shift(); //Remove o primeiro nome na lista do array;
delete alunos[4]; //deleta a informação que está no index apontando pelo []; Ele é usado para apagar uma informação e manter o index.

//Mostrando o resultado:
console.log(alunos);
console.log(alunos.slice(0,1)) //pega entre os index 0 ao 1. Aponta para o parâmetro colocado dentro do ().
console.log(removidofirst);
console.log(removidolast);
console.log(alunos instanceof Array); //Mesma questão do Java, pergunta se a instância do objeto é a mesma de um tipo específico.
console.log(alunos2); //Mostrando como ele não foi afetado e está usando a lista original.