//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []

function adicionarAmigo() {
    amigos = document.querySelector('input').value;
    console.log(amigos)
    limparCampo()
}

function limparCampo() {
    amigos = document.querySelector('input');
    amigos.value = '';
}