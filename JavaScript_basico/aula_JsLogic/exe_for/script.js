//Criando a guia dos elementos com a lista:
const elements =[ 
    {tag: 'p', text: 'Este trecho é um parágrafo'},
    {tag: 'div', text: 'Este trecho é uma divisória'},
    {tag: 'footer', text: 'Este trecho é um rodapé'},
    {tag: 'section', text: 'Este trecho é uma seção'}
];

//Seção das variáveis que manipulam o HTML:
const div = document.querySelector('.result');

//Função que percorre os elementos:
function for_elements(){
    for(let i = 0; i < elements.length; i++){
        let {tag, text} = elements[i]; //Desestruturei o array de objetos para que a cada iteração, a tag e text receba o valor do obj.
        let tags = document.createElement(tag);
        insert_html(tags, text);
    }
}

//Função que insere o texto no HTML:
function insert_html(tag, text){
    tag.innerHTML = text;
    div.appendChild(tag); //
}

//Rodando a função principal:
for_elements();