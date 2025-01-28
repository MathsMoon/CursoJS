/* Revisão geral dos Arrays */

const names = ['M.A.B', 'João', 'Lucas', 'Marcos'];
console.log(names);

//Deletando o item do array (não seu espaço): Não altera os índices
delete names[2];
//console.log(names);

//Copiando um Array, sem que ele se torne uma referência na memória
let nome = [...names];

nome.pop();
//console.log(nome);
// console.log(names);

//Usando o slice:
let new_array = nome.slice(0,-1); //Retirando o da ponta direita com o -1
//console.log(new_array); 

//Convertendo uma String em um Array:
let nobleTitles = 'Pela Graça de Deus, Imperador da Áustria, Rei da Hungria, Rei da Boémia, de Dalmácia, Croácia, Eslovênia, Galícia, Lodoméria e Ilíria; Rei de Jerusalém, etc... Arquiduque da Áustria, Grão-Duque de Toscana e Cracóvia, Duque de Lorena e Salzburgo, de Estíria, Caríntia, Carníola e Bucovina; Grão-príncipe da Transilvânia; marquês da Morávia; Duque da Alta e da Baixa Silésia, de Módena, Parma e Placência e Guastalla, de Auschwitz, Zator e Teschen, Friul, Ragusa e Zara; conde de Habsburgo e Tirol, de Ciburgo, Gorízia e Gradisca; Príncipe de Trento e Brixen; marquês da Alta e da Baixa Lusácia e da Ístria; Conde de Hohenems, Feldkirch, Bregenz, Sonnenberg, etc...; Senhor de Trieste, de Cattaro, e de Marca Wendia; Grão Voivoda da Sérvia.';
let arrayTitles = nobleTitles.split(',' || ';');
//console.log(arrayTitles);

//Convertendo o Array para uma String:
let newString = arrayTitles.join(',');
//console.log(newString);

// Invertendo um Array de Nomes:
const inv_names = names.reverse();
//console.log(inv_names);

/* Método Splice */

//Removendo o item vazio do array de nomes com método splice:
let removeds = names.splice(1, 1); //Removendo o <1 empty item>
//console.log(names, removeds);

// Adicionando elementos ao Array via splice:
names.splice(names.length, 0, 'Luis');
console.log(names);