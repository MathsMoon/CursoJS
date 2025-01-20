/* Criando uma Lista de Tarefas */

//Variáveis responsáveis por pegar a informação:
const input_Text = document.querySelector('.input-text');
const button_Add = document.querySelector('.button-add');
const Activities = document.querySelector('.activities');


/* Seção das funções */

//Criando item para ser adicionado na lista:
function create_ListItem(msg) {
    //Variável que recebe o list Item:
    const li = create_Li_Item();

    //adicionando ao Li o item descrito:
    li.innerText = msg;

    //Adicionando o item já criado a ul no HTML:
    Activities.appendChild(li);
}

//Função que cria o item Li
function create_Li_Item() {
    const li = document.createElement('li');
    return li;
}


/* Seção de Eventos */

//Capturando o evento de clique no botão:
button_Add.addEventListener('click', function(event) {
    // event.preventDefault();

    //Verificação que em caso de input vazio, a função se encerrará antes que "mostre o nada".
    if(!input_Text.value) return;

    //Jogando o que foi descrito para dentro da função de lista:
    create_ListItem(input_Text.value);
});

//Caputando evento do Enter do teclado para envio:
input_Text.addEventListener('keypress', function(event){
    //capturando um evento em específico para submit do input:
    if(event.target == 13){
        console.log(event);
    }
});