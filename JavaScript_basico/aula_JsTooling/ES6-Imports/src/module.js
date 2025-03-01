//Variáveis para serem exportadas:
const data = [
    {
        name: 'Mar',
        email: 'mar.i@com',
        password: '123'
    },
    {
        name: 'Lui',
        email: 'Lui.a@com',
        password: '444'
    },
    {
        name: 'Ellen',
        email: 'Ellen.1212@pom',
        password: '666'
    },
    {
        name: 'Iago',
        email: 'Iago.XD@pom',
        password: '000'
    }
];

function mapping_List(obj) {
    obj.map(obj => {
        console.log(obj.name);
    })
}

//Tornando viável o acesso destas variáveis para qualquer import.
export {data, mapping_List as default};