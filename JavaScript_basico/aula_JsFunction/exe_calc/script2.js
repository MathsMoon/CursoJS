/* Convertendo tudo do script que é uma função factory para uma função construct */
(function (){
        function Calculator() {

            //Criando a variável que vai conter o display:
            const display = document.querySelector('.display');

            /* Seção de Eventos */

            //Função que inicia a calculadora pegando os clicks do mouse
            this.begin = () => {
                this.captureClick();
                //this.captureNumPad();
            }

            //Função que captura os clicks do mouse nos botões do display:
            this.captureClick = () => {
                document.addEventListener('click' , event => {
                    const el = event.target;

                    if(el.classList.contains('btn-num')) {this.addNumdisplay(el);}
                    if(el.classList.contains('btn-clear')) {this.clearDisplay();}
                    if(el.classList.contains('btn-del')) {this.deleteLastElOnDisplay();}
                    if(el.classList.contains('btn-eq')) {this.showingResult();}
                });
            }

            //Função que captura os números digitados do Numpad ou numéricos acima do teclado:
            // this.captureNumPad = () => {
            //     document.addEventListener('numpad', event => {
            //         const el = event.target;

            //     });
            // }

            //Função que recebe o enter como envio:
            // this.enterKey = () => {
            //     document.addEventListener('keypress', event => {
            //         console.log(event);
            //         if(event.keyCode == 13) {
            //             this.showingResult();
            //         }
            //     });
            // }

            //Função que escreve no display os números
            this.addNumdisplay = el => {
                display.value += el.innerText;
                display.focus();
            }
            
            //Função que apaga o último elemento do display:
            this.deleteLastElOnDisplay = () => {
                display.value = display.value.slice(0, -1);
            }

            //Função que limpa a cálculadora:
            this.clearDisplay = () => {
                display.value = '';
            }

            //Função que mostra a conta feita:
            this.showingResult = () => {
                let conta = display.value;

                //Utilizando o método eval:
                try {
                    //Capturando possíveis erros:
                    if(Number.isNaN(conta)) {
                        alert("Não é permitido caracteres além dos números");
                        return;
                    }

                    //Realizando a conta e mostrando resultado:
                    conta = eval(conta);
                    display.value = conta;
                } catch (e) {
                    alert("Não é permitido caracteres além dos números");
                    return;
                }
            }
        }

    //Chamando a função:
    const calc = new Calculator();
    calc.begin();
})();