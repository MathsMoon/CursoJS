//Criando as variáveis globais do escopo para manipular o DOM
const div = document.querySelector('.articles');
const ps = div.querySelectorAll('p');

//Variável recebe todos os estilos do CSS atribuídos ao body:
const body_style = getComputedStyle(document.body);

//Variável que define a cor de fundo que foi pega no body_style:
const body_bgColor = body_style.backgroundColor;

//Manipulando os atributos do NodeList:
for (let p of ps) {
    //Reescreva cada p para que contenha background color do body.
}