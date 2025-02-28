document.addEventListener('click', (e) => {
    const el = e.target;
    const tag = el.tagName.toLowerCase(); //pegando o nome da tag

    if(tag === 'a') { //caso a tag seja de um <a>, ele irá ser mostrado com o display.
        e.preventDefault(); //previnindo o redirecionamento pra página do link.
        displaypage(el);
    }
});

//pegando a página via Fetch:
function displaypage(el) {
    const href = el.getAttribute('href');
    fetch(href).
    then(response => response.text()).
    then(html => showing_Result(html)).
    catch(e => console.log(e));
}

function showing_Result(response) {
    const result = document.querySelector('.result');
    result.innerHTML = response;
}