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
    
    isa_Sequence() { //verify if the cpf and returning a boolean value to verify and validate
        return this.cleanCPF.charAt(0).repeat(11) == this.cleanCPF;
    }

    validating_CPF() { 
        if(!this.cleanCPF) return false; //Confirming if the cpf_num was cleaned.
        if(typeof this.cleanCPF !== 'string') return false; //Checking if the cpf_num is in string format.
        if(this.cleanCPF.length !== 11) return false; //Checking the length, none under 11 can pass.
        if(this.isa_Sequence()) return false; //Checking and denying whether it is a sequence.
        return "i'm here!"; //just checking after adding extra lines, just to make sure everything is correct. :b
    }
    
}

//Establishing the standards for testing the CPF Validator.
const cpf1 = new CPF_Validator('2313.1231.3131');
const cpf2 = new CPF_Validator("999.999.999-02");
const cpf3 = new CPF_Validator('127.001.222.255');
const cpf4 = new CPF_Validator('127.101.202-01');

//Calling and Testing the Validantion:
// console.log(cpf1);
// console.log(cpf2);
// console.log(cpf3);
// console.log(cpf4);

console.log(cpf1.validating_CPF()); //Expected Result: false Actual result: false.
console.log(cpf2.validating_CPF()); //Expected Result: false Actual result: 
console.log(cpf3.validating_CPF()); //Expected Result: false Actual result: false.
console.log(cpf4.validating_CPF()); //Expected Result: true Actual result: 