/* Revisão geral de Objetos */

/* Sobre os Objetos:
    Existem 2 principais maneiras de criar um objeto, a maneira direta com {}
    e usando algum construtor, independente de qual seja a forma, o objeto
    sempre terá possibilidade de possuir Propriedades, valores e funções
    em sua estrutura.

    Uma questão importante para ser esclarecida é a chamada de propriedades e 
    valores de um Objeto, apesar de existirem as possibilidades de usarmos 2 
    métodos para isso, exemplo:
    
    - Obj.nome e Obj['nome']

    Apesar da facilidade com o '.', em certas situações que não temos acesso direto
    as propriedades podemos ter melhor proveito utilizando o [prop], buscando o nome
    comum desta propriedade e retornando o valor procurado.

    Existem 3 tipos principais de geradores de objeto, que são as funções: Factory,
    Constructor e Classes. Cada uma delas é capaz de retornar um tipo de comportamento
    no que se refere ao objeto e seu uso, cada qual é possível se utilizar segundo
    a forma preescrita, mais adiante no curso será mais demonstrado o quanto os métodos
    podem divergir para se criar e utilizar os objetos.
*/

// Criando objeto pessoa:
const human = {
    id: 1,
    name: 'Padrão',
    surname: 'Padrão',
    nickname: '',
    age: 0,
};

/* Alterando os valores padrão do objeto */
//console.log(person); //Estado padrão do objeto

//Deletando uma das propriedades e seus valores:
delete human.nickname; //Deleta a propriedade nickname
//console.log(person);

//Renomeando um atributo através da cópia e criação de um novo objeto:
const {id: ID, ...rest} = human; 
const newObj = {ID, ...rest};
//console.log(newObj);

//Vendo todas as propriedades de um Objeto:
for (const key in newObj) {
    // console.log(key); //para mostrar o valor da chave, basta mudar para newObj[key];
}

/* Criando um Molde para criar Objetos usando o Factory */

function person(name, surname, age) {
    return {
        ID,
        name,
        surname,
        age,

        /* Seção das Funções */
        // generateID() { Veja como arrumar este gerador de ID.
        //     return ID = Math.floor(Math.random() * (9999 - 1000) + 1000);
        // },

        fullname() {
            return `Nome: ${name} ${surname}`;
        },

        description() {
            return `ID: ${ID}.\n${this.fullname()}\nAge: ${age}`;
        }
    };
};

//Mostrando os resultados para a função Factory:
const p1_factory = person('Mar', 'Assis', 20);
const p2_factory = person('Luis', 'Henrique', 14);
const p3_factory = person('Afonso', 'Henrique', 45);

// console.log(p1_factory.description());
// console.log(p2_factory.description());
// console.log(p3_factory.description());

/* Criando um Molde para criar Objetos usando o Constructor  */
function Person(name, surname, age) {
    this.name = name;
    this.surnamename = surname;
    this.age = age;

    //Caso queira gerar um objeto deste constructor já livre de futuras alterações use o Freeze:
    //Object.freeze(this);
}

//Mostrando os resultados para a função Constructor:
const p1_constructor = new Person('Mar', 'Assis', 20);
const p2_constructor = new Person('Luis', 'Henrique', 14);
const p3_constructor = new Person('Afonso', 'Henrique', 45);

// console.log(p1_constructor);
// console.log(p2_constructor);
// console.log(p3_constructor);

//Tornando os objetos protegidos de qualquer mudança de seus valores:
Object.freeze(p1_factory);
Object.freeze(p1_constructor);