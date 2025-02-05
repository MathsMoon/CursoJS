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

//Criando uma subclasse para o Eletric_Device:
class Smartphone extends Eletric_Device {
    constructor(name, madeBy,  launch_year){
        super(name); //Para chamar o constructor da classe Pai
        madeBy = madeBy;
        launch_year = launch_year;
    }
}


//Criando o objeto:
const smartphone = new Eletric_Device('IFOM');
const smartphone2 = new Smartphone('Moto G14', 'Motorola', 2023);
console.log(smartphone);
console.log(smartphone2);

//Ligando e desligando o dispositivo:
// console.log(smartphone.isOn);
// smartphone.turning_On();
// console.log(smartphone.isOn);

//Ligando e desligando o Smartphone:
console.log(`${smartphone2.name} is on? ${smartphone2.isOn}`);
smartphone2.turning_On();
console.log(`${smartphone2.name} is on? ${smartphone2.isOn}`);