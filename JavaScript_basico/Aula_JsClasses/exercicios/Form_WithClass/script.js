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
        const validid_camps = this.checkfields();
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

        // For que percorre o todo o formulário para verificar se estão todos assinalados: 
        for(let camp of this.form.querySelectorAll('.to_Validate')) {
            //Com o label temos como especificar o nome do campo que estamos nos referindo
            let label = camp.previousElementSibling.innerHTML;
            
            if(!camp.value) {
                this.createError(camp, `O campo ${label} não pode estar vazio!`);
                valid = false;
            }
        }

        //Validating the CPF:
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
}

//Calling the validateForm:
const valid = new validateForm();