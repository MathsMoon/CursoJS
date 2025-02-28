const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true); //Valores: metódo, link e se é assícrono.
        xhr.send(); //caso o método seja post, viria por aqui, neste caso pode deixae em branco.

        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        });
    });
};


document.addEventListener('click', (e) => {
    const el = e.target;
    const tag = el.tagName.toLowerCase(); //pegando o nome da tag

    if(tag === 'a') { //caso a tag seja de um <a>, ele irá ser mostrado com o display.
        e.preventDefault(); //previnindo o redirecionamento pra página do link.
        displaypage(el);
    }
});

async function displaypage(el) {
    try {
        const href = el.getAttribute('href');
        
        //pegando e validando a página:
        const response = await request({
            method: 'GET',
            url: href,
        });

        //Mostrando ela na div:
        showing_Result(response);
    } catch(e) {
        console.log(e);
    }
}

function showing_Result(response) {
    const result = document.querySelector('.result');
    result.innerHTML = response;
}