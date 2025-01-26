/* Convertendo tudo do script que é uma função factory para uma função construct */
(function (){
    function Calculator(){
        //Variáveis públicas da calculadora:
        const display = document.querySelector('.display');

        //Área de testes:
        // console.log('Calculadora Iniciada'); R: Está sendo devidamente iniciada

        const begin = function (){
            this.button_Click();
            this.enterKey();
        }
        

        /* Seção de captura de eventos */
        //
        function button_Click() {
            this.document.addEventListener('click', function(event) {
                const el = event.target;

                console.log(el);

                if(el.classList.contains('btn-num')){
                    
                    
                    //btn_toDisplay(el.innerText);
                    
                }
                
                if(el.classList.contains('btn-clear')) { //Limpando todo o input
                    clear_Display();
                }

                if(el.classList.contains('btn-del')){ //Deletando o último caractere inserido
                    delete_LastChar();
                }

                if(el.classList.contains('btn-eq')) { //Retornando o resultado do cálculo
                    showing_Result();
                }
            });
        }

        /* Seção das funções */

        //
        function Numpad_Click() {
            
        }

        //
        function enterKey() {
            showing_Result();
        }

        //
        function btn_toDisplay(new_Value) {
            display.innerText += new_Value;
        }

        //
        function showing_Result(){
            const display_Text = display.value;

            try {
                if(!display_Text) {
                    //alert('Não é permitidos outros caracteres além dos número!');    
                    return;
                }
                btn_toDisplay(eval(display_Text));
            } catch (e){
                alert('Não é permitidos outros caracteres além dos número!');
            }
        }

        //
        function delete_LastChar() {

        }
    }

    //Chamando a função:
    Calculator();
})();