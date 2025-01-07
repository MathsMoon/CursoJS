//Seção das variáveis Globais do escopo:
const date = new Date(); 


function main_Function() {
    //Inserindo a nova data formatada.
    const new_date = time_Correction();

    //Inserindo a nova data no H1:
    over_Writes();
}

//Função que rescreve o H1 para o horário atual:
function over_Writes(){
    
}

//Função que formata a data para o tipo certo
function time_Correction() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
    const new_date = (date.toLocaleDateString('pt-BR', options));
    return new_date;
}

//Executando a função principal ao carregar do site:
main_Function();