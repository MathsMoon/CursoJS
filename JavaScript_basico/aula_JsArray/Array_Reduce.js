/* Método Reduce */

/* Sobre o reduce:
    Ele reduz os elementos do objeto referenciado para apenas 1 valor que os contém, apesar
    de possuir as mesmas capacidades do MAP e Filter, não é recomendado seu uso para todas
    as situações, portanto o reduce se enquadra melhor no retorno de valores singulares 
    ou de somas totais de conjuntos.
*/

//Variável modelo:
const array = Array.from({length: 21}, () => Math.floor(Math.random() * (100 - 1) + 1));


//Usando o reduce para chamar a soma de todos os elementos do array:

/* Explicando o código:
    Para o reduce funcionar, ele conta com mais um atributo além do valor, índice e do array completo como já visto em MAP e Filter.
    Ele possui um acumulador, como este método funciona na rechamada da função para cada elemento dentro do array, podemos 
    utilizar o acumulador como via de soma ou de parâmetro para cada caso que temos no array.

    estabelecemos um valor padrão do lado de fora da função anônima ou flecha, assim damos como iniciado o acumulador com o valor
    repassado e a cada iteração ele deve ser alterado dentro da própria função, caso contrário seu retorno será como "undefinied".
    
*/

//Somando todos os valores do array com reduce:
const sum = array.reduce((acc, value) => {
    acc += value;
    return acc;
}, 0);

// console.log(array);
// console.log(sum);

//Retornado o array com os pares Impares (função filter):
const odd_numbers = array.reduce((acc,value) => {
    if(value %2 !== 0) {
        acc.push(value);
    }
    return acc;
}, []);

/* O certo seria usar o método filter como está abaixo:
const odd_numbers2 = array.filter(value => value % 2 !==0);
*/

// console.log(array);
// console.log(odd_numbers);

//Retornando um array com o dobro dos valores:
const double_Array = array.reduce((acc, value) =>{
    value *= 2;
    acc.push(value);
    return acc;
}, []);

// console.log(array);
// console.log(double_Array);

/* O certo seria usar o método Map como está abaixo: 
const double_Array2 = array.map(num => num *2);
*/

// console.log(array);
// console.log(double_Array);

//retornando a pessoa mais velha deste objeto:
const community = [
    {Name: 'Amélia', Age: 55},
    {Name: 'Antônio', Age: 67},
    {Name: 'Aparecida', Age: 88 },
    {Name: 'Afonso', Age: 90 },
]

//Para fazer o contrário basta inverter a ordem de retorno do acc e do value:
const oldestInComunity = community.reduce((acc ,value) =>{
   if(acc.Age > value.Age) return acc;
   return value;
});

console.log(oldestInComunity);