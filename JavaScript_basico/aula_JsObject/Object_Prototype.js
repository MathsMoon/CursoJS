/* Utilizando os Prototypes:
   O seu uso se dá principalmente pela necessidade de otimização,
   quando construímos diversos objetos eles tem em si a capacidade 
   de utilizarem funções ou realizarem atividades, se a cada objeto
   tivessemos que criar estes parâmetros, quanto mais objetos, mais
   difícil e pesado seria para carregar, já que utilizariam os recursos
   para realizar alguma atividade

   os prototypes vem como uma maneira de otimizar as funções e atividades
   tornando elas universais para os tipos específicos de objetos que as
   possuem, criando em apenas 1 lugar todas as possibilidades e funções
   de um objeto e o tornando mais leve, carregando apenas o essencial
   para que utilize o que é necessário.
*/

//Criando um Objeto:
const objA = {
    key1: 'A'
}

const objB = {
    key2: 'b'
}

//Alterando o prototype do objeto B para receber as chaves do objeto A:
Object.setPrototypeOf(objB, objA);
//console.log(objB.key1);

/* Utilizando Prototypes para Objetos construídos via função ou classe */

//Criando um Objeto Constructor:
function Product(name, price, stock){
    this.Name = name;
    this.Price = price;
    this.Stock = stock;
}

/* Seção das Prototypes */

Product.prototype.buying = function(qtd) {
    if(isNaN(qtd)) throw new TypeError('Valor inserido incorreto, apenas valores numéricos!');
    if(qtd > this.Stock) throw new TypeError('Valor inserido é maior que o estoque atual!');
    this.Stock -= qtd;
    console.log('Compra Realizada!');
}

/* Seção dos Produtos */

const prod1 = new Product('Feijão', 3.50, 10);
const prod2 = new Product('Leite', 7.50, 20);
console.log(prod1);
console.log(prod2);

//testando os prototypes do prod1:
prod1.buying(2);
console.log(prod1);

//Testando os prototypes do prod2: (Para que ele funcione e adquira as mesmas funções do prod1, tem que usar o setPrototype).
Object.setPrototypeOf(prod2, Product.prototype); //Qualquer produto pode herdar os prototypes usando esta fôrmula.
prod2.buying(5);
console.log(prod2);

/* Uma outra forma de criar o Objeto e já instânciar as propriedades é via Object.create(),
Não é uma boa solução caso você não saiba de onde vem as propriedades ou como é organizada,
mas pode servir como um tampão para questões menores, funciona da seguinte forma: 
*/

//PS: É horrível usar, se vc não configurar as predefinições manualmente, ele não funciona como esperado.
const prod3 = Object.create(Product.prototype, {
    Name: {
        value: 'Arroz',
        writable: false,
        configurable: false,
        enumerable: true
    },
    Price: {
        value: 5.5,
        enumerable: true
    },
    Stock: {
        value: 10,
        writable: true,
        enumerable: true
    }
});

//Mostrando o produto:
console.log(prod3);

//Testando prototype:
prod3.buying(3);
console.log(prod3);

/* Arrumar depois este código, para que retorne um objeto completo de uma conta Bancária:

    function bank_Account(name, cpf, phone) {
        this.Name = name;
        this.Cpf = cpf;
        this.Phone = phone;
    }

    const protype_Bank = {
        /* Seção das variáveis Globais 
        ID: 0,
        Account: 0, 
        Agency: 0,

        /* Seção de Get's 

        getGenerateBankAccount() {
            this.ID = Math.floor(Math.random() * (9999 - 1000) + 1000);
            this.Account = Math.floor(Math.random() * (5999 - 4999) + 1000);
            this.Agency = Math.floor(Math.random() * (9999 - 8999) + 1000);
        },

        getOrganizedObj(obj){
            return {
                ...obj,
                ID: this.ID,
                Account: this.Account,
                Agency: this.Agency
            }
        }
    }

    const p1 = bank_Account('Matheus', 123, 456);
    Object.setPrototypeOf(p1, protype_Bank);
    console.log(p1.getOrganizedObj());
*/