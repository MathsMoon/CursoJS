//Pegando informações Json de forma indireta, como uma API faz.
// fetch('pessoas.json').
// then(response => response.json()).
// then(response => showing_OnPage(response));

//Maneira mais rápida com Axios
axios('pessoas.json').
then(response => showing_OnPage(response.data));

function showing_OnPage(json) {
    const table = document.createElement('table');

    for(let person of json) {
        const tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = person.nome;
        tr.appendChild(td);
        
        td = document.createElement('td');
        td.innerHTML = person.idade;
        tr.appendChild(td);
        
        td = document.createElement('td');
        td.innerHTML = person.salario;
        tr.appendChild(td);

        table.appendChild(tr);
    }
    const result = document.querySelector('.result');
    result.appendChild(table);
}