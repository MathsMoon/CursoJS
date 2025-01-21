/* Criando uma Lista de Tarefas */

//Variáveis responsáveis por pegar a informação:
const input_Text = document.querySelector('.input-text');
const button_Add = document.querySelector('.button-add');
const Activities = document.querySelector('.activities');


/* Seção das funções */

//Criando item para ser adicionado na lista:
function create_Item(msg) {
    //Variável que recebe o list Item:
    const li = create_Li_Item();

    //adicionando ao Li o item descrito:
    li.innerText = msg;

    //Adicionando o item já criado a ul no HTML:
    Activities.appendChild(li);
    
    //Adicionando um botão de delete junto ao Li    
    delete_ItemButton(li);

    //Salvando o item:
    save_ItensInList();
}

//Função que cria o item Li
function create_Li_Item() {
    //Inserindo o elemento do li dentro de uma variável, todo texto manipulado terá este elemento.
    const li = document.createElement('li');
    return li;
}

//Função que limpa a barra do Input
function clear_InputBox() {
    input_Text.value = '';
    input_Text.focus(); //Limpando a tarefa, a barra do input terá o foco para que possa ser digitado um novo item.
}

//Função que adiciona um botão para apagar os itens:
function delete_ItemButton(li) {
    li.innerText += ' ';
    const delete_Button = document.createElement('button');
    delete_Button.innerText = 'Apagar';
    delete_Button.setAttribute('class', 'delete');
    delete_Button.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(delete_Button);
}

//Função que salva os Itens da lista:
function save_ItensInList() {
    const itens_List = Activities.querySelectorAll('li'); //Pegando todos os itens da Lista através do Li
    const array_List = []; //Todos serão guardados neste array:

    //Passando por cada item da Lista para que individualmente retorne o valor descrito:
    for (const item of itens_List) {
        let text_item = item.innerText;
        text_item = text_item.replace('Apagar', '').trim();
        array_List.push(text_item);
    }

    //Transformando o conteúdo em um JSON:
    const tasks_JSON = JSON.stringify(array_List);
    localStorage.setItem('Tarefas', tasks_JSON); //Guardando no Cachê
}

//Retornando a lista de itens salvos na ul:
function return_SavedTasks() {
    const getLocal_Item = localStorage.getItem('Tarefas');
    const list_ItensToArray = JSON.parse(getLocal_Item); //Tornando o tipo String do JSON para um array como era antes do Stringify.

    for(let task of list_ItensToArray){
        create_Item(task);
    }
}

/* Seção de Eventos */

//Capturando o evento de clique no botão:
button_Add.addEventListener('click', function(event) {
    //Verificação que em caso de input vazio, a função se encerrará antes que "mostre o nada".
    if(!input_Text.value) return;

    //Jogando o que foi descrito para dentro da função de lista:
    create_Item(input_Text.value);
    clear_InputBox();
});

//Capturando evento do Enter do teclado para envio:
input_Text.addEventListener('keypress', function(event){
    //capturando um evento em específico para submit do input:
   if(event.keyCode === 13) {
    if(!input_Text.value) return;
    //Jogando o que foi descrito para dentro da função de lista:
    create_Item(input_Text.value);
    clear_InputBox();
   } 
});

//Capturando o click do botão de apagar para deletar o item:
document.addEventListener('click', function(event){
    const element = event.target;

    if(element.classList.contains('delete')) {
        element.parentElement.remove();
        save_ItensInList();
    }
});

//chamando a função para retorno da lista salva
return_SavedTasks();