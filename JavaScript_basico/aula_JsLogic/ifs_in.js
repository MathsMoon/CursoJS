/* Operação Ternária */

//Definindo configs padrão para o usuário:
let user_points = 999;
let user_color = null;

//verificando as condições para o usuário:
const user_lvl = user_points >= 1000 ? 'Usuário VIP' : 'Usuário Comum';
const user_theme = user_color || 'Black'; //Escolhe o tema próprio caso assignado ou pega o padrão Black caso não tenha nada

//Mostrando resultado:
console.log(`User level: ${user_lvl}. \nUser theme: ${user_theme}.`);