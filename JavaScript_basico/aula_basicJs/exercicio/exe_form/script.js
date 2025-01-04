//Função de evento para carregar junto a página
window.onload = function esperando_site() {
    function user_Data(name, surname, email, phone) {
        return user = {
            nome: name,
            sobrenome: surname,
            email: email,
            telefone: phone
        };
    }

    const data_bank = [user_Data('Matheus', 'Alves', 'mat@com', 123)];
    console.log(data_bank);
}