/* Atividades e Aprendizados sobre JSON */

//Variáveis usadas nas atividades:
const person = {
    name: 'Mariane',
    surname: 'Alves',
    age: 22
};
const person_String = '{"name":"Mariane","surname":"Alves","age":22}'; //Objeto solo
const persons = '[{"name":"Mariane","surname":"Alves","age":22}]'; //Para o array de objetos.

// 103 - Conversão do tipo Objeto para String:
function converting_ToString(obj) { //Podemos tanto usar parâmetro quanto chamar o objeto através do escopo, mas esta segunda forma não é recomendada.
    return JSON.stringify(obj);
}

// 104 - Convertendo string para objeto:
function converting_ToObject(json_String) {
    JSON.parse(json_String); //Retornando a string agora como objeto
    return json_String;
}

// 105 - Acessando os parâmetros de um objeto convertido do String:
function acessing_Properties(json_String, prop){
    const obj = JSON.parse(json_String); //Pesquisar o motivo de não poder fazer direto:
    return obj[prop];
}

// 106 - Adicionando mais uma propriedade a um objeto convertido da String:
function adding_Properties(json_String, prop, value){
    json_String = JSON.parse(json_String);
    json_String[prop] = value; //Adicionando a propriedade e já conferindo valor
    return JSON.stringify(json_String); //Não sei como retornar sem que eu volte a colocar ele como string.
}

// 107 - Filtrando as propriedades quando convertido ao JSON:
function filter_ConvertedJson(obj) {
    return JSON.stringify(obj, ['name', 'age']);
}

// 108 - função que formata a saída da string JSON:
function formatted_JSON(obj) {
    return JSON.stringify(obj, null, 2);
}

// 109 - Convertendo uma string json para um array e adicionando uma nova propriedade:
function adding_ObjectToArray(json_String, newObject) {
    //Transformando o array em objeto e adicionando o novo objeto ao array:
    const array = JSON.parse(json_String);
    array.push(newObject);

    //Convertendo o array em uma string JSON para melhor visualização:
    JSON_Array = JSON.stringify(array, null, 2);
    return JSON_Array; 
}

// 110 - Alterando os valores de um Objeto:
function changing_Values(obj){
    // O for abaixo é esta função, mas que não funcionou para mim e ainda não sei o motivo.
    // const changing = (key, value) => {
    //     if(key == 'age') return value + 1;
    // }

    //For verifica as propriedades e ao encontrar a idade, adiciona +1 ano a idade.
    for(let props in obj){
        if(props == 'age'){
            obj[props] +=1;
        }
    } 

    //Convertendo o objeto para String para visualização:
    new_obj = JSON.stringify(obj);
    return new_obj;
}


//Mostrando resultados:
console.log(`Resposta da Atividade 103: ${converting_ToString(person)}`); //Retornando o Objeto.
console.log(`Resposta da Atividade 104: ${converting_ToObject(person_String)}`); //Retornando o Objeto convertido da String.
console.log(`Resposta da Atividade 105: ${acessing_Properties(person_String, 'name')}`); //pegando o valor da propriedade 'nome' do objeto.
console.log(`Resposta da Atividade 106: ${adding_Properties(person_String, 'addres', 'my Heart')}`); //pegando o objeto convertido e colocando mais uma propriedade e definindo um valor.
console.log(`Resposta da Atividade 107: ${filter_ConvertedJson(person)}`); // Pegando o objeto, convertendo a JSON e filtrando para retornar nome e iadde.
console.log(`Resposta da Atividade 108: ${formatted_JSON(person)}`); //Formatando a saída do JSON, para que sai identado.
console.log(`Resposta da Atividade 109: ${adding_ObjectToArray(persons, {name: "Matheus", surname: "Alves", age: 22})}`); //Adicionando um novo objeto a um Array
console.log(`Resposta da Atividade 110: ${changing_Values(person)}`); //Alterando uma informação dos valores do Objeto.