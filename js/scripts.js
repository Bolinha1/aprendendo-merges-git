var contatos = [
                'Anderson:anderson@teste.com', 
                'Bolinha:bolinha@teste.com', 
                'Juliano:juju@teste.com', 
                'Otávio:otavio@teste.com'
            ];
var paragrafo = document.querySelector('p');
var input = document.querySelector('input');
var btn = document.querySelector('button');

btn.addEventListener('click', function () {
    var nomePesquisa = input.value;
    input.value = '';
    input.focus();
    for (var i = 0; i < contatos.length; i++) {
        var contatosNome = contatos[i].split(':');
        if (contatosNome[0] === nomePesquisa) {
            paragrafo.textContent = contatosNome[0] + ' seu email é: ' + contatosNome[1] + '.';
            break;
        } else {
            paragrafo.textContent = 'Contato não encontrado.';
        }
    }
});