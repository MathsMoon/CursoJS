/* Tratando e lançado erros. */

//Pegando erros com catch:
// try {
//     console.log(a);
// } catch (err) {
//     console.error(err); //Mostrando exatamente o tipo do erro
// }

//Utilizando o try em uma situação real:
function soma(x,y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números.'); //Retornando um erro com esta frase e os detalhes de onde ocorreu.
    }

    return x + y;
}

//Mostrando o resultado:
try {
    console.log(soma(1,23));
    console.log(soma(1,"a")); //captura este erro e exibe a mensagem de erro abaixo, tudo abaixo deste erro não será executado.
}catch (err){
    console.log(err); //envia a mensagem completa de erro do throw.
}

/* Usando o Try com o bloco finally */

//Função que retorna o horário atual
function return_TimeNow(data) {
    if(data && !(data instanceof Date)){ //verificando se o objeto passado a função é da classe date.
        throw new TypeError('Esperando tipo Date'); //retornando o tipo esperando através de um TypeError.
    }

    if(!data){ 
        data = new Date();
    }
}

//Mostrando o resultado:
return_TimeNow();