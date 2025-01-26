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
                this.enterKey();
            },

            //Recebendo evento do click do mouse
            button_Click() {
                document.addEventListener('click', function (event){
                    const el = event.target;

                    //Verificação para cada possibilidade dentro do teclado da calculadora:
                    if(el.classList.contains('btn-num')) { //Reconhecendo os caracteres e numeros
                        this.btnToDisplay(el.innerText);
                    }

                    if(el.classList.contains('btn-clear')) { //Limpando todo o input
                        this.clear_Display();
                    }

                    if(el.classList.contains('btn-del')){ //Deletando o último caractere inserido
                        this.delete_LastChar();
                    }

                    if(el.classList.contains('btn-eq')) { //Retornando o resultado do cálculo
                        this.showing_result();
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
                this.display.value = this.display.value.slice(0, -1); //ver depois como utiliza o slice
            },

            //Função que vai retornar o valor do cálculo para dentro do display:
            showing_result() {
                let conta = this.display.value;

                /* 
                    A função eval executa tudo dentro dela como um código do javascript, 
                    neste caso ela é utilizada pela sua facilidade em transformar qualquer string
                    em uma conta e retornar este resultado.
                    Mas devido a possibilidade de serem passados códigos via input, esta função 
                    se torna perigosa em contexto aberto sem proteção.
                */

                //Usando o try para permitir o eval:
                try {
                    conta = eval(conta);

                    //Caso seja NaN, retorna um alerta e impede de mostrar qualquer resultado:
                    if(!conta){
                        alert("Não é permitido caracteres além dos números");
                        return;
                    }

                    this.display.value = conta;
                } catch(e) {
                    alert("Não é permitido caracteres além dos números");
                    return;
                }
            },

            //Função que captura o evento de pressionar Enter para mostrar o resultado:
            enterKey() {
                document.addEventListener('keyup', e => { //em todo o documento ao pressionar Enter, o resultado aparecerá.
                    if(e.keyCode == 13) this.showing_result();
                });
            }
        };
    }

    //Criando a calculadora e iniciando ela:
    const created_Calc = create_Calc();
    created_Calc.begin();
})();