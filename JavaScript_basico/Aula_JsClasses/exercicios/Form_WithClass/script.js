class validateForm {
    constructor() {
        this.form = document.querySelector('.form');
        this.events();
    }

    /* Events Listeners */
    events() {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    /* Functions Section */
    
    // Função que irá lidar com os eventos do formulário:
    handleSubmit(e) {
        e.preventDefault(); //Prevent the page from reloading after sending the forms.
        const valid_camps = this.checkfields(); //
        const valid_passwords = this.validating_PassWords();

        // Validação de ambas as respostas para enviar o formulário.
        if(valid_camps && valid_passwords) {
            alert('Formulário Enviado');
            this.form.submit();
        }
    }

    // Função que irá realizar os checks para cada campo, para que estejam de acordo com as especificações:
    checkfields() {
        // Creating a valid statement to return and verifying that all fields are correct.
        let valid = true;

        // For que percorre os fields para limpar os textos pre-existentes, previnindo assim um acúmulo de text-error.
        for(let errorText of this.form.querySelectorAll('.error-Text')){
            errorText.remove(); //Removing the previous error message to avoid accumulation.
        }

        /* Verifying the Specifics of Each Field in the Forms */

        // For que percorre o todo o formulário para verificar as condições:
        for(let camp of this.form.querySelectorAll('.to_Validate')) {
            //Com o label temos como especificar o nome do campo que estamos nos referindo
            let label = camp.previousElementSibling.innerHTML;

            // Verificando se existe algum campo em branco:
            if(!camp.value) {
                this.createError(camp, `O campo ${label} não pode estar vazio!`);
                valid = false;
            }

            /* Verificação dos fields do formulário. */

            if(camp.classList.contains('cpf')){ 
                if(!this.validating_CPF(camp));
            }

            if(camp.classList.contains('user_name')) {
                if(!this.isNameValid(camp));
            }

            if(camp.classList.contains('user_surname')) {
                if(!this.isNameValid(camp));
            }

            if(camp.classList.contains('user_nickname')) {
                if(!this.isNicknameValid(camp));
            }
        }

        return valid;
    }

    // Função que realizará o check das senhas passadas:
    validating_PassWords() {
        let valid = true;
        
        //Creating the statements to check and ensure that both fields are proper and identical.
        const password = this.form.querySelector('.user_password');
        const confirm_Password = this.form.querySelector('.confirm_password');

        //
        if(password.value !== confirm_Password.value){
            valid = false;
            this.createError(password, "As Senhas devem ser as mesmas!");
            this.createError(confirm_Password, "As Senhas devem ser as mesmas!");
        }

        //
        if(password.value.length < 6 || password.value.length > 12){
            valid = false;
            this.createError(password, "A Senha devem ter entre 6 a 12 caracteres!");
        }

        return valid;
    }

    // Função que cria uma mensagem de erro e retorna via Div para o usuário:
    createError(camp, msg) {
        // Criando o elemento a ser manipulado
        const div = document.createElement('div');
        
        // Definindo o tipo da mensagem e inserindo no forms via error-text
        div.innerHTML = msg;
        div.classList.add('error-Text');
        
        // Inserindo após o campo:
        camp.insertAdjacentElement('afterend', div);
    }

    // Função que Valida o CPF passado:
    validating_CPF(camp) {
        const cpf = new ValidaCPF(camp.value);

        if(!cpf.valida()) {
            this.createError(camp, "CPF inserido é inválido!");
            return false;
        }
        return true; 
    }

    //Função que verifica se o nome obedece aos parâmetros:
    isNameValid(camp) {
        const user = camp.value;
        let valid = true;

        if(user.length < 3 || user.length > 12) {
            this.createError(camp, "Nome do usuário precisa ter entre 3 a 12 caracteres!");
            valid = false;
        }
        
        if(!user.match(/^[a-zA-Z0-9]+$/g)){
            this.createError(camp, "Nome do usuário só aceita letras ou números!");
            valid = false;
        }

        return valid;
    }

    isNicknameValid(camp) {
        const user = camp.value;
        let valid = true;
        
        if(!user.match(/^[a-zA-Z0-9]+$/g)){
            this.createError(camp, "Nome do usuário só aceita letras ou números!");
            valid = false;
        }

        if(user.length < 3 || user.length > 12) {
            this.createError(camp, "Nome do usuário precisa ter entre 3 a 12 caracteres!");
            valid = false;
        }

        return valid;
    }
}

//Calling the validateForm:
const valid = new validateForm();