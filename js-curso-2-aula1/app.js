//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do Número Secreto';
//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1','Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');


function verificarChute(){
    console.log('O botão foi clicado!');
    alert('Eu amo JS');
}
function gerarNumeroAleatorio(){
    let numero = Math.floor(Math.random() * 10) + 1;
    return numero;
}
