//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let digitado;
let numeroDeAmigos;
let amigoSelecionado;

function adicionarAmigo() {
    digitado = document.querySelector('input').value;

    if (digitado == '') {
        console.log(digitado);
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(digitado);
        console.log(amigos);
        listaAmigos();
    }
    
    limparCampo();
}

function sortearAmigo() {
    if (amigos == undefined) {
        alert("Por favor, insira um nome.");
        console.log(amigos);
    } else {
        numeroDeAmigos = amigos.length;
        selecionado = parseInt(Math.random() * numeroDeAmigos);
        console.log(selecionado);
        amigoSelecionado = amigos[selecionado];
        console.log(amigoSelecionado);

        document.getElementById('resultado').innerText = `O amigo escolhido foi: ${amigoSelecionado}`;
        console.log(`O amigo escolhido foi: ${amigoSelecionado}`);
    }
}

function listaAmigos() {
    var lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    
    for(var i = 0; i < amigos.length; i++) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(amigos[i]));
        lista.appendChild(li);
    }
}

function limparCampo() {
    digitado = document.querySelector('input');
    digitado.value = '';
}
