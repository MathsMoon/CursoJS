/* Definição de propriedade e propriedades de um objeto:
    O intuito deste método é a proteção das propriedades de um objeto, os tornando semelhantes as constantes.
*/

//Criando um modelo para Produtos:
function Product(name, price, qtd_Stock) {
    //Definindo os atributos e comportamentos de todas as propriedades do Product:
    
    Object.defineProperties(this, {
        name: {
            enumerable: true,
            value: name,
            writable: false,
            configurable: false
        },
        price: {
            enumerable: true,
            value: price,
            writable: false,
            configurable: false
        }
    });
    
    Object.defineProperty(this, 'qtd_Stock', {
        enumerable: true, //mostra a chave
        value: qtd_Stock, //define o valor da chave
        writable: false, //define se é possível alterar o valor após a construção
        configurable: false //define se a chave pode ser reconfigurada
    });
}

//Criando os produtos:
const prod1 = new Product('Meias', 15.99, 33);
const prod2 = new Product('Caderno', 20.99, 13);
const prod3 = new Product('Lapis', 5.99, 203);

console.log(prod1);
console.log(prod2);
console.log(prod3);