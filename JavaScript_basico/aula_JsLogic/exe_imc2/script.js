/* Organização padrão para o site */

//garantindo a execução do Js junto a página:
window.onload = function wainting_Site_Load() {

    //Criando variáveis globais para pegar informações:
    const imc_form = document.querySelector('.form');
    const imc_showing = document.querySelector('.showing-result');

    //Função que guarda o comportamento para o submit:
    function wait_submit(event){
        event.preventDefault(); //Impedindo o evento padrão de acontecer.
        
        //Criando variáveis para receber as informações:
        const weight = Number(imc_form.querySelector('#weight').value);
        const height = Number(imc_form.querySelector('#height').value);
        
        //Verificação das variáveis recebidas:
        if(!weight) { //Se for NaN é invalidada na hora.
            sending_message('Valor do peso inválido.', false);
            return;
        }
        if(!height) {
            sending_message('Valor da altura inválido.', false);
            return;
        }

        //Cálculo IMC:
        const imc_result = getIMC(weight, height);

        //Condições para a classificação do IMC:
        const imc_level = verify_Classification(imc_result);

        //Construção da mensagem:
        const msg = `Seu IMC é: ${imc_result}, sua classificação: ${imc_level}.`;
        sending_message(msg, true);
    }

    /* Funções usadas dentro do comportamento: */

    function getIMC(weight, height){
        let result = weight / height**2
        return result.toFixed(2);
    }

    //Função que verifica a classificação da Tabela IMC:
    function verify_Classification(imc){
        //Criando os níveis para colocar na mensagem via index.
        const level = ['Abaixo do Peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

        //Condicionamento para busca:
        if (imc >= 39.9) return level[5];
        if (imc >= 34.9) return level[4];
        if (imc >= 29.9) return level[3];
        if (imc >= 24.9) return level[2];
        if (imc >= 18.5) return level[1];
        if (imc < 18.5) return level[0];
    }

    //Função que cria parágrafos:
    function creatingP() {
        const p = document.createElement('p');
        return p;
    }

    //Mostrando o resultado final:
    function sending_message(msg, isValid) {
        const imc_showing = document.querySelector('.showing-result');
        imc_showing.innerHTML = '';
        
        const p = creatingP();

        if (isValid) {
            p.classList.add('positive-result');
            console.log('Teste 01:' + isValid);
        } else {
            p.classList.add('negative-result');
            console.log('Teste 02:' + isValid);
        }

        p.innerHTML = msg;
        imc_showing.appendChild(p);
    }

    //Rescrevendo o evento de chamada com a função do wait_submit:
    imc_form.addEventListener('submit', wait_submit);

    //Rescrevendo o evento de reset com a função reset:
    imc_form.addEventListener('reset', reset);

    //Apagando as informações mostradas com evento de reset:
    function reset() {
        imc_showing.innerHTML = '';
    }
}