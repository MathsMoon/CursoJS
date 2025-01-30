/* Método Map */

/* Sobre o Map:
    O map retorna valores que diferem do array original que está sendo mapeado,
    ao contrário do filter, o map retorna o mesmo tamanho que o array original
    modificando seus valores ou ordem.

    PS: Lembrando que é importante caso necessário, repassar o objeto referenciado
    para que não altere o original, e apenas a estrutura seja copiada, para isso
    basta usar o {...VariávelQueCarregaoOjbeto}.
*/

//Criando um objeto e um array que serão usados nas demais atividades:
const Users = [
    {username:'Huimuode', email: 'Huimuode@com'},
    {username:'Guogyogi',  email: 'Guogyogi@bom'},
    {username:'Ricardo',  email: 'Ricardo@bom'},
    {username:'Hegus',  email: 'Hegus@tom'},
    {username:'OtáviO',  email: 'Otávio@fom'},
    {username:'Xoexa',  email: 'Xoexa@fom'},
    {username:'????????????',  email: '????????????@com'},
    {username:'Fimehe',  email: 'Fimehe@pom'},
];

/* Explicando o código abaixo:
    O Array from cria um novo array que é iterável a cada posição, nele descrevemos
    que seu tamanho é de 21 (do index 0 ao 20), para cada iteração iremos inserir 
    o valor que virá pelo Math.Random(), através de uma arrow function
*/
const array = Array.from({length: 21}, () => Math.floor(Math.random() * 100));

//Duplicando os valores do Array original:
const double_Array = array.map(value => value * 2);

//Mostrando resultado:
// console.log(array);
// console.log(double_Array);

//Mapeando o Objeto, removendo a propriedade username e substituindo por nickname, adicionando ID:
const new_Users = Users.map(function(obj){
    //Criando um novo Objeto:
    newObj = {...obj};

    //Definindo os novos ID's: (OBS: ver depois como fazer com que cada random seja único).
    newObj.ID = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
    
    //Criando a coluna nickname e apagando a antiga username:
    newObj.nickname = newObj.username;
    delete newObj.username;

    //Retornando o novo layout do Objeto:
    return newObj = {
        ID: newObj.ID,
        Nickname: newObj.nickname,
        email: newObj.email
    };
});

//Mostrando Resultado:
console.log(new_Users);

//Retornando os nicknames com a propridade que a identifica: (Os parênteses são necessários para tornar o {} em expressão, não função).
let nicks = new_Users.map(obj => ({Nickname: obj.Nickname}));
//console.log(nicks);

//Mapenado os Usuários e mudando o final para @Fom:
const new_email = Users.map(obj => obj.email.replace('@', '@Fom')); 
//console.log(new_email);