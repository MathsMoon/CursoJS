//Criando a guia dos elementos com a lista:
const elements =[ 
    {tag: 'p', text: 'frase 1'},
    {tag: 'div', text: 'frase 2'},
    {tag: 'footer', text: 'frase 3'},
    {tag: 'section', text: 'frase 4'}
];

//Variável que manipula o HTML
const section = document.querySelector('.container');

//Função principal do escopo:
function main(){
    for_elements();
}

//Função que percorre os elementos:
function for_elements(){
    for(i = 0; i < elements.length; i++){
        console.log(elements[i]);
    }
}

//Função que insere o texto no HTML:
function insert_html(){
    
}

//Rodando a função main:
main();