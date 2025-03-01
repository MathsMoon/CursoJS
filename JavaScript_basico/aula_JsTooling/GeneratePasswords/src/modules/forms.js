import generatePassword from "./generate_password";

//Tabela com as flags:
const passwordOutput = document.querySelector('.showingPassword');
const qtdChar = document.querySelector('.qtd-characters');
const chkLCLetters = document.querySelector('.chk-minusculas');
const chkUpCLetters = document.querySelector('.chk-maiusculas');
const chkNums = document.querySelector('.chk-nums');
const chkSimbols = document.querySelector('.chk-simbols');
const submit = document.querySelector('.submit');

export default () => {
    submit.addEventListener('click', () => {
        passwordOutput.innerHTML = gettingThePassword();
    });

    document.addEventListener('click', (e) => {
        const el = e.target;
        
        if(el.classList.contains('erase')) {
            passwordOutput.innerHTML = '';
        }
    })
};

function gettingThePassword() {
    const password = generatePassword(
        qtdChar.value,
        chkUpCLetters.checked,
        chkLCLetters.checked,
        chkNums.checked,
        chkSimbols.checked
    );

    return password || 'Nada Selecionado!';
}