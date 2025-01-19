/* Criando uma Lista de Tarefas */

//Criando as variáveis de manipulação:
const container_input = document.querySelector('.container');
const div_sub = document.querySelector('.div-sub');

function wait_Submit(event) {
    event.preventDefault(); //impedindo de reset da página.

    let item = container_input.querySelector('#activities').value;
    console.log(item);

}

//Esperando o envio da informação via submit
div_sub.addEventListener('submit', wait_Submit);


/* Seção das funções do TO DO LIST */
function insertItem(item) {
    div_sub.innerHTML = item;
}

function delete_Item() {

}