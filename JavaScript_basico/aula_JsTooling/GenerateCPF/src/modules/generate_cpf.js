import creatingCPF from './Validating_cpf';

export default class generate_cpf {
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    formatedCPF(cpf) {
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        );
    }

    newCPF() {
        const cpfWithouDigit = this.rand();
        const first_Digit = creatingCPF.getNewDigits(cpfWithouDigit);
        const second_Digit = creatingCPF.getNewDigits(cpfWithouDigit + first_Digit);
        const new_cpf = cpfWithouDigit + first_Digit + second_Digit;
        return this.formatedCPF(new_cpf);
    }
}