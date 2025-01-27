/* Revisão geral dos Arrays */

const names = ['M.A.B', 'João', 'Lucas', 'Marcos'];
console.log(names);

//Deletando o item do array (não seu espaço): Não altera os índices
delete names[2];
console.log(names);

//Copiando um Array, sem que ele se torne uma referência na memória
let nome = [...names];

nome.pop();
console.log(nome);
console.log(names);

// Invertendo um Array de Nomes: