//Organização padrão para o site:
window.onload = function wainting_Site_Load() {
    //Criando variável para pegar informações:
    const imc_display = document.querySelector('.div-display');
    const imc_showing = document.querySelector('.showing-result');

    //Função que elimina o reload do submit:
    function wainting_submit(event){
        event.preventDefault();
        
        //Criando variáveis para receber 
        const weight = imc_display.querySelector('#weight').value;
        const height = imc_display.querySelector('#height').value;
        console.log(weight);
    
        //Cálculo IMC:
    

        //Mostrando o resultado
        imc_showing.innerHTML = `<p>${weight}</p>`;
    }
    imc_display.addEventListener('submit', wainting_submit);
}