/* Tratando e lançado erros. */

//Pegando erros com catch:
// try {
//     console.log(a);
// } catch (err) {
//     console.error(err); //Mostrando exatamente o tipo do erro
// }

//Utilizando o try em uma situação real:
// function soma(x,y) {
//     if(typeof x !== 'number' || typeof y !== 'number') {
//         throw new Error('x e y precisam ser números.'); //Retornando um erro com esta frase e os detalhes de onde ocorreu.
//     }

//     return x + y;
// }

// //Mostrando o resultado:
// try {
//     console.log(soma(1,23));
//     console.log(soma(1,"a")); //captura este erro e exibe a mensagem de erro abaixo, tudo abaixo deste erro não será executado.
// }catch (err){
//     console.log(err); //envia a mensagem completa de erro do throw.
// }

/* Usando o Try com o bloco finally */

//Função que retorna o horário atual
function return_TimeNow(data) {
    if(data && !(data instanceof Date)){ //verificando se o objeto passado a função é da classe date.
        throw new TypeError('Esperando tipo Date'); //retornando o tipo esperando através de um TypeError.
    }

    //Caso o valor do date não seja uma instância da classe, aqui ele recebe a instância:
    if(!data){ 
        data = new Date();
    }

    //retornando o valor do tempo com padrão do Brasil:
    return data.toLocaleTimeString('pt-BR', {
        // hour12: true -> Por padrão ele retorna no formato 24 horas, mas fazendo isso, se utiliza o AM e PM.
    });
}

/* Testando possíveis erros:
const hour = return_TimeNow(11); -> Erro por não inserir uma instância do tipo Date.
console.log(hour);
const data = new Date('01-01-2000 00:00:00'); -> Retorna o horário conforme descrito no data. resultado: 00:00:00
const hour = return_TimeNow(data);
console.log(hour);
*/

//Mostrando o resultado:
const hour = return_TimeNow(); //Quando não se insere um valor via date, ele retorna o valor atual do horário.
console.log(hour);