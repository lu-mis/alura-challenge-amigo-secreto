//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

// Função para adicionar amigo à lista
function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value.trim();

    if (nomeAmigo) {
        if (amigos.includes(nomeAmigo)) {
            alert('Este amigo já foi adicionado.');
        } else {
            amigos.push(nomeAmigo);
            listaAmigos();
            document.getElementById('amigo').value = ''; // Limpar o campo de input
        }
    } else {
        alert('Por favor, digite o nome de um amigo.');
    }
}

// Função para atualizar a lista de amigos na tela
function listaAmigos() {
    var lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    
    for(var i = 0; i < amigos.length; i++) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(amigos[i]));
        lista.appendChild(li);
    }
}

// Função para sortear o amigo secreto
function sortearAmigo() {
    if (amigos == undefined) {
        alert("Por favor, insira um nome.");
    } else {
        var numeroDeAmigos = amigos.length;
        var selecionado = parseInt(Math.random() * numeroDeAmigos);
        var amigoSelecionado = amigos[selecionado];

        document.getElementById('resultado').innerText = `O amigo sorteado foi: ${amigoSelecionado}!`;
    }
}
