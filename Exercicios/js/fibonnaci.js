/* Sequência n de fibonnaci */

//criando a variável que recebe o n-ésimo valor da fibo
const n_fibo = Math.floor(Math.random () * 100);

//Função que guarda o cálculo
function fibonnaci() {

    //Variáveis que irão alternando o valor a cada iteração. Num 1 -> Num 2 -> Num 3 -> Num 1...
    let num1 = 1;
    let num2 = 2;
    let num3 = 0;

    //For para receber o n-ésimo valor para que seja loopado
    for (let i = 0; i <= n_fibo; i++){
        //Cálculo e resultado:
        num3 = num1 + num2;
        console.log(num3);
        
        //Reorganizando os valores
        num1 = num2;
        num2 = num3;
    }
}

//Chamando a função
fibonnaci();