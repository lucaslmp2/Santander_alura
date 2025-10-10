//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do Número Secreto';
//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto)
let tentativas = 1;
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); 
}


exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
        if(chute == numeroSecreto){
            exibirTextoNaTela('h1','Parabéns!! você acertou!!');
            let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
            let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}.`;
            exibirTextoNaTela('p',mensagemTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }else{
            if(chute > numeroSecreto){
                exibirTextoNaTela('p', 'O numero secreto é menor.');
            }else{
                exibirTextoNaTela('p', 'O número secreto é maior.');
            }
            tentativas++;
            limparCampo();
        }
}
function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    console.log(numeroSecreto);
    tentativas = 1;
    exibirMensagemInicial();
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}