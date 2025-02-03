/* Herança de Classes (based) */

class Eletric_Device {
    constructor(name) {
        this.name = name;
        this.isOn = false;
    }

    /* Seção dos Métodos da classe */

    turning_On() {
        if(this.isOn) {
            console.log(`${this.name} already On.`);
            return;
        }
        this.isOn = true;
    }

    turning_Off() {
        if(!this.isOn) {
            console.log(`${this.name} already Off.`);
            return;
        }
        this.isOn = false;
    }
}

//Criando o objeto:
const smartphone = new Eletric_Device('IFOM');
console.log(smartphone);

//Ligando e desligando o dispositivo:
console.log(smartphone.isOn);
smartphone.turning_On();
console.log(smartphone.isOn);