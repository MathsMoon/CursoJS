//Criando o array que sera iterada:
const nums = [1,2,3,4,5,6,7,8,9,10];

//Loop que itera sobre todos os elementos do array nums:
for (const num of nums) {
    //Condição que permite a continuidade da iteração sem que passe pelos demais códigos:
    if(num === 4){
        continue;
    }

    //Condição que finaliza o loop ao chegar no 7:
    if (num === 7){
        break;
    }

    //Mostrando o valor iterado:
    console.log(num);
}

/* Obs: dependendo do tipo de loop utilizado para verificação, sempre reveja o tipo de condição e o comportamento para que a iteração
    não seja infinita ou incompleta na sua atividade, sempre organize os parâmetros antes da palavra chave para que o comportamento 
    de todo o bloco realize correspondentemente o que é preciso.
*/
