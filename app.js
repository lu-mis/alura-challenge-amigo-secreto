//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []

function adicionarAmigo() {
    let digitado = document.querySelector('input').value;
    
    if (digitado == '') {
        console.log(digitado);
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(digitado);
        console.log(amigos);
    }
    
    limparCampo();
}

function limparCampo() {
    amigos = document.querySelector('input');
    amigos.value = '';
}