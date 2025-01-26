/* Funções geradoras */

/* Uma função geradora vai realizar uma função e retornar o valor
que é repassado via yield, desta forma ela não necessita finalizar 
ou ser chamada novamente para mostrar os demais valores, implícita-
mente ela guarda o next(), que é um método que chama o próximo 
yield dentro da função e vai mostrando o resultado de acordo com 
os parâmetros estabelecidos, o return nesta função é usado para finaliza-
la completamente, sendo só utilizado ao final desta função.

Para o código abaixo faça o seguinte:
Cria uma pessoa e mostre os atributos dela passo a passo.

opcional: se quiser faz algo interativo pra você ver e ir passando o next você mesmo.
*/

function* getValue() {
    yield () => {
        this.Name.value;
    } 

    yield () => {
        this.Age.value;
    }
}

function setPerson(name, age, address){
    return {
        Name:name,
        Age: age,
        Address: address
    }, getValue();
}

setPerson('a', 1, 1);
const get = getValue();