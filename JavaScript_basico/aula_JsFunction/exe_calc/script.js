//Retirando o código do escopo global do arquivo:
(function (){
    function create_Calc(){
        return {
            /* Seção das Propriedades */
            display: document.querySelector('.display'),

            /* Seção dos Métodos */
            //Inicializando a calculadora
            begin() {
                this.button_Click();
            },

            //Recebendo evento do click do mouse
            button_Click() {
                document.addEventListener('click', function (event){
                    const el = event.target;

                    //Verificação para cada possibilidade dentro do teclado da calculadora:
                    if(el.classList.contains('btn-num')) {
                        this.btnToDisplay(el.innerText);
                    }

                    if(el.classList.contains('btn-clear')) {
                        this.clear_Display();
                    }

                    if(el.classList.contains('btn-eq')) {
                        showing_result();
                    }
                }.bind(this)); //Ele torna o comportamento do this para se referir ao pai de todas as funções (a própria calculadora).
            },

            //Função que pega o valor do botão pressionado e mostra no display:
            btnToDisplay(new_Value) {
                this.display.value += new_Value;
            },

            //Função que limpa o conteúdo no display:
            clear_Display(){
                this.display.value = ' ';
            },

            //Função que apaga o caractere anterior:
            delete_LastChar() {
                const arr = [];
                /* Deletando o último caractere inserido na calculadora:

                    Pega o display.value e divide cada parte do valor para ser 1 caractere cada.
                    Percorra os caracteres que serão armaezandos no array e apague o último que foi colocado.
                */
            },

            //Função que vai retornar o valor da igualdade para dentro do display:
            showing_result() {
                
            }
        };
    }


    //Criando a calculadora e iniciando ela:
    const created_Calc = create_Calc();
    created_Calc.begin();
})();