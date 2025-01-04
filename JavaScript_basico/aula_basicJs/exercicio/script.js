//Exercício para Números.

//Criando um evento para carregar junto a página (só assim para não precisar usar o script dentro da página)
window.onload = function Esperando_o_site_carregar() {

    //Criando as variáveis:
    const num = Number(prompt('Digite um número: ')); //Number converte o tipo de variável string padrão do prompt para number.
    const num_titulo = document.getElementById('numero-titulo'); //Variável que vai pegar os ID's do site e organizar o nosso script via Js.
    const num_texto = document.getElementById('texto'); //variável que pega o id da div.

    //Organizando o texto para o html
    num_titulo.innerHTML = num; //O número que foi escolhido no prompt vai ser adicionado ao h1 no html.
    num_texto.innerHTML = `Raiz Quadrada: ${Math.pow(2, num)}<br>`;
    num_texto.innerHTML += `${num} é inteiro? ${Number.isInteger(num)}<br>`;
    num_texto.innerHTML += `É um NaN? ${isNaN(num)}<br>`;
    num_texto.innerHTML += `Arredondando para baixo: ${Math.floor(num)}<br>`;
    num_texto.innerHTML += `Arredondando para cima: ${Math.ceil(num)}<br>`;
    num_texto.innerHTML += `Com duas casas decimais: ${num.toFixed(2)}<br>`;
}