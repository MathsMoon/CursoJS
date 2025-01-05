//Criando uma função geral para agregar o conteúdo
window.onload = function waiting_Site_Load() {
    //Definindo o evento de envio do formulário
    const form = document.querySelector('.form');
    const receive = document.querySelector('.receive');

    //Definindo a array de memória
    const users = [];

    //Criando a função que vai designar o que acontecerá com o evento que é enviar os dados pelo formulário
    function wainting_Form_Submit(event) {
        event.preventDefault();

        //Criando as variáveis para construir a pessoa
        const user_name = form.querySelector('#user_name').value;
        const user_surname = form.querySelector('#user_surname').value;
        const user_email = form.querySelector('#user_email').value;
        const user_phone = form.querySelector('#user_phone').value;

        //Inserindo os dados do formulário em um Array:
        users.push({
            user_name,
            user_surname,
            user_email,
            user_phone
        });
        
        //Mostrando os resultados de cada inserção na div do site:
        receive.innerHTML += `
        <p>
          Nome: ${ user_name } 
          ${ user_surname },
          E-mail: ${ user_email }, 
          Telefone: ${ user_phone }
        </p>`
    }
    //Acionando o evento do submit:
    form.addEventListener('submit', wainting_Form_Submit);
}