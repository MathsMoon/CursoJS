/* Classes with statics and instances methods */

/* 
    Tentei começar a escrever os comentários em inglês, mas eu não domino o idioma.
    Fica complicado descrever o que estou pensando de forma a não ficar formal ou 
    "Claramente não é nativo".

    Lembrando os conceitos que vi em java, a principal difereça entre os tipos de 
    métodos utilizados é a via que são chamados. A maioria das funções são utilizadas
    via instância, ou seja, utiliza-se um objeto de uma determinada classe e este objeto
    chama a função dentro da classe que ele está instanciando. O que difere do estático, 
    que é uma função própria da classe e pode ser chamada por ela mesma, como desmontra
    abaixo:

    Este método não pode ser chamado pela instância, nem a classe pode passar informações
    de instância. 
*/

class remote_Control {
    constructor(tv, vol = 0) { //if they send no volume, the configurable set is 0.
        this.tv = tv;
        this.vol = vol;
    } 

    /* Using Static methods */
    static change_Channels() {
        return `Changing channels...`;
    }

    /* Using instance methods */
    increase_Volume() {
        this.vol += 2;
    }

    decrease_Volume() {
        this.vol -= 2;
    }

    tv_Description() {
        return `Tv name: ${this.tv}. \nActual volume: ${this.vol}`
    }
}

const control = new remote_Control('LG');

//Increasing and decreasing the TV volume:
console.log(`Test 1: ` + control.tv_Description());
control.increase_Volume();
control.increase_Volume();
control.increase_Volume();
control.increase_Volume();
control.increase_Volume();
console.log(`Test 2: ` + control.tv_Description());
control.decrease_Volume();
control.decrease_Volume();
console.log(`Test 3: ` + control.tv_Description());

//Calling the function via class:
console.log(`Class call: ` + remote_Control.change_Channels());