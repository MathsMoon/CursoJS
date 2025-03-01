import generateCPF from './modules/generate_cpf.js';
import './assets/css/style.css';
(function (){
    const generated_CPF = document.querySelector('.showingCPF');

    document.addEventListener('click', (e) => {
        const el = e.target;
        if(el.classList.contains('newcpf')){
            generated_CPF.innerHTML = '';
            giveNewCPF();
        }

        if(el.classList.contains('erase')){
            generated_CPF.innerHTML = '';
        }
    })
    
    function giveNewCPF() {
        const newCPF = new generateCPF();
        generated_CPF.innerHTML = newCPF.newCPF();
    }
})();