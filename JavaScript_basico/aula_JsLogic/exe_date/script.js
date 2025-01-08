//Função que carrega após o término de Load do site:
window.onload = function loading_site() {
    //Seção das variáveis Globais do escopo:
    const date = new Date(); 
    const h1 = document.querySelector('.container h1');

    //Função principal do escopo, reuni todas as informações nela:
    function main_Function() {
        //Inserindo a nova data formatada.
        const new_date = time_Correction();

        //Inserindo a nova data no H1:
        over_Writes(new_date);
    }

    //Função que rescreve o H1 para o horário atual:
    function over_Writes(date){
        h1.textContent = `${date}`;
    }

    //Função que formata a data para o tipo certo
    function time_Correction() {
        //Definindo o padrão de visualização do objeto:
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: 'numeric', 
            minute: 'numeric'
        };
        
        //definindo e retornando o objeto formatado:
        const new_date = (date.toLocaleDateString('pt-BR', options));
        return new_date;
    }

    //Executando a função principal ao carregar do site:
    main_Function();

    /* Versão reduzida de tudo acima: 
    
    h1.innerHTML = DataTransfer.toLocaleDateString('pt-BR', {
        dateStyle: 'full',
        timeStyle: 'short'
    });
    */
}