/* Criando um alerta para rodar no teste.html
    No vsCode o código roda de uma forma diferente comparada ao navegador, devido a diferença de ambiente além de outras demais
    particularidades que com o tempo vão ser mais claras. 

    O alert cria uma caixa de diálogo que obriga o usuário a clickar em "Ok" para acessar o conteúdo da página, sua utilização
    será para alta prioridade e não deve ser usada muitas vezes por prejudicar a experiência do usuário.

    O confirm cria uma caixa de diálogo que faz uma pergunta, dando duas opções entre "Ok" e "Cancel". Pode ser utilizando para 
    confirmações em geral como em envio de formulários. (Ele retorna um valor booleano de True or false nas respostas).

    O prompt cria uma caixa de diálogo que permite ao usuário escrever alguma informação e envia-la, retornando o que foi escrito
    pelo usuário.
*/

/* Tipos de alerta:

alert('Mensagem top!');
confirm("Deseja realmente enviar?");
prompt("Escreva algo ai: ");

*/

// Exercício da Aula: Soma de 2 números

let nome = prompt("Escreva seu nome: ");
let valor1 = parseInt(prompt("Digite um número: "));
let valor2 = parseInt(prompt("Digite mais um número: "));

//Cálculo resultado
resultado = valor1 + valor2;

//Mostrando resultado
alert(`A soma entre ${valor1} e ${valor2} é igual a ${resultado}, entendeu ${nome}?`);

/* 
const confirma_acao = confirm("As informações colocadas estão corretas?");

if(confirma_acao == true){
    console.log(`Seja bem-vindo ${nome}! Parabéns pelos ${idade} de vida.`);
    console.log(`Você nasceu em ${(2025 - idade)}, muito pog!`);
} else {
    alert('Tudo errado sempre.');
} 
*/