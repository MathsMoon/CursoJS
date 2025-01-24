/* Funções de Fábrica */

//Criando objeto através da função:
function create_Person(name, surname, age){
    return {
        name: name,
        surname: surname,
        age: age,
        addres: 'Rua 123',
        talk() {
            return `${name} is talking.`;
        },
        where_Live() {
            return `${name} live in ${this.addres}`; //Utilizando o caso this para pegar um valor não definido no parâmetro.
        },

        //Essa função, diferente das outras acima, se comporta como um atributo devido ao get.
        get fullname() {
            return `${name} ${surname}`;
        },

        set job(job) {
            console.log(job);
        }
    };
}

//criando a pessoa:
const p1 = create_Person('João', 'Pedro', 21);
console.log(p1);
console.log(p1.talk());
console.log(p1.where_Live());
console.log(p1.fullname); //Não precisa ser tratada como uma função mesmo sendo.
p1.job = 'Software Engineer';
