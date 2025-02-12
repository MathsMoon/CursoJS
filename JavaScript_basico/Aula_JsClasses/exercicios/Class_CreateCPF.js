/* Creating a CPF validator */

class CPF_Validator {
    constructor(new_cpf) {
        //Defining the CPF property to safeguard and clean the content in order to better validate the information:
        Object.defineProperty(this, 'cleanCPF', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: new_cpf.replace(/\D+/g, '')
        });
    }

    /* Class methods */
    
    generate_NewCPF() { //Creating a new CPF with the clean num passed. (Rev) 
        const cpf_WithoutLastTwo = this.cleanCPF.slice(0, -2); //Removing from CPF the last two digits. (Rev)
        //Adding the last two numbers to create a new CPF. (Rev)
        const first_Digit = CPF_Validator.getNewDigits(cpf_WithoutLastTwo); 
        const second_Digit = CPF_Validator.getNewDigits(cpf_WithoutLastTwo + first_Digit); 
        this.new_cpf = cpf_WithoutLastTwo + first_Digit + second_Digit;
    }

    static getNewDigits(cpf_WithoutLastTwo) { // Pegando os dois últimos dígitos e criando novos:
        let total = 0;
        let reverse = cpf_WithoutLastTwo.length + 1;

        for(let string_Num of cpf_WithoutLastTwo) {
            total += reverse * Number(string_Num);
            reverse--;
        }

        const digit = 11 - (total % 11);
        return digit <= 9 ? String(digit) : '0';
    }

    isa_Sequence() { //verify if the cpf and returning a boolean value to verify and validate.
        return this.cleanCPF.charAt(0).repeat(11) == this.cleanCPF;
    }

    validating_CPF() { 
        if(!this.cleanCPF) return false; //Confirming if the cpf_num was cleaned.
        if(typeof this.cleanCPF !== 'string') return false; //Checking if the cpf_num is in string format.
        if(this.cleanCPF.length !== 11) return false; //Checking the length, none under 11 can pass.
        if(this.isa_Sequence()) return false; //Checking and denying whether it is a sequence.
        this.generate_NewCPF(); // Criando um novo CPF.
        return this.new_cpf === this.cleanCPF; // verificando se ambos são iguais.
    }
}

//Establishing the standards for testing the CPF Validator.
const cpf1 = new CPF_Validator('2313.1231.3131');
const cpf2 = new CPF_Validator("999.999.999-02");
const cpf3 = new CPF_Validator('127.001.222.255');
const cpf4 = new CPF_Validator('127.101.202-24');
const cpf5 = new CPF_Validator('070.982.720-03')

//Testing the validation:
if(cpf4.validating_CPF()) {
    console.log('CPF Válido!')
} else {
    console.log('CPF Inválido!')
}