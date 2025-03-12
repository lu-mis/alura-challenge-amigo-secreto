//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let digitado;

function adicionarAmigo() {
    digitado = document.querySelector('input').value;

    if (digitado == '') {
        console.log(digitado);
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(digitado);
        console.log(amigos);
    }
    
    limparCampo();
}

function sortearAmigo() {
    numeroDeAmigos = amigos.length;
    selecionado = parseInt(Math.random() * numeroDeAmigos);
    console.log(selecionado)
    console.log(amigos[selecionado]);
    alert(`O amigo escolhido foi: ${amigos[selecionado]}`);
}

function limparCampo() {
    digitado = document.querySelector('input');
    digitado.value = '';
}