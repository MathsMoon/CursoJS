/* Herança ou Delegação no Javascript 
   Diferente da compreensão comum, na linguagem do javascript o termo herança não define
   corretamente o comportamento de receber de outros objetos certas características, 
   na documentação a forma expressa é Herança, mas o que a linguagem realmente realiza
   é uma delegação, ou seja, um objeto tem seus prototypes, caso os dele não seja suficientes
   para buscar por uma determinada tarefa, ele aponta para um objeto maior que ele que está
   delegado em responder pela tarefa e assim a delegação vai subindo os degraus até o Object. 
*/

//Criando o Modelo de todos os Produtos:
function Product(name, price) {
    this.Name = name;
    this.Price = price;
}

//Definindo os Prototypes do Produto:
Product.prototype.increasePrice = function(pcp) {
    if(typeof pcp !== 'number') throw new TypeError('Apenas valores numéricos aceitos!');
    this.Price += (this.Price * (pcp/100));
}

Product.prototype.descountPrice = function(pcp) {
    if(typeof pcp !== 'number') throw new TypeError('Apenas valores numéricos aceitos!');
    this.Price -= (this.Price * (pcp/100));
}

//Criando os produtos específicos:
function t_shirt(name, price, description, color){
    Product.call(this, name, price); //Utiliza as informações para que a t-shirt também seja um produto.
    this.Description = description;
    this.Color = color;
}

//Linkando os prototypes e organizando o construtor para ser designado corretamente:
t_shirt.prototype = Object.create(Product.prototype);
t_shirt.prototype.constructor = t_shirt;

//Testando:
const prod1 = new Product('gen', 12);
const prod2 = new t_shirt('Polo', 120, 'A smarter style of t-shirt, with a collar and a few buttons at the front.', 'black');

console.log(prod1);
console.log(prod2);

//Modificando o preço:
// prod1.increasePrice('50'); //retorna o erro como esperado
prod1.increasePrice(50);
prod2.descountPrice(10);

//Resultado final: (Deu certo)!
console.log(prod1);
console.log(prod2);