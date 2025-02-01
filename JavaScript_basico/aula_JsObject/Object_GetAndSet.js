/* Utilização de Gets and Setters */

function Product(name, price, qtd_Stock){
    this.name = name;
    this.price = price;

    //Utilizando os gets and sets dentro da propriedade:
    Object.defineProperty(this, 'qtd_Stock', {
        enumerable: true,
        configurable: false,
        get: function() {
            return qtd_Stock;
        },
        set: function(value) {
            //A maneira correta de verificar um NaN:
            if(isNaN(value)) throw new TypeError('Apenas caracteres numéricos são aceitos!');
            qtd_Stock = value;
        }
    });
}

const prod1 = new Product('Arroz', 4.50, 20);
// console.log(prod1.qtd_Stock);
//prod1.qtd_Stock = 'oi';
// console.log(prod1.qtd_Stock);


/* Utilizando Gets and Setters em uma função Factory */

function create_Product(name, price){
    return {
        getNome() {
            return name;
        },

        setNome(new_name) {
            if(Number(new_name)) throw new TypeError('Não são aceitos caracteres numéricos!');
            name = new_name;
        },

        getPrice() {
            return price;
        }
    }
}
//Criando o novo objeto e mostrando os resultados:
const prod1_factory = create_Product('Feijão', 3.50, 10);

console.log(prod1_factory.getNome());
console.log(prod1_factory.getPrice());

//Testando para ver se o Throw retorna a mensagem de erro: (Deu certo!).
// prod1_factory.setNome('10');
// console.log(prod1_factory.getNome());

//alterando o nome após confirmar que não é possível ter numeros
prod1_factory.setNome('Feijão Carioca'); 
console.log(prod1_factory.getNome());