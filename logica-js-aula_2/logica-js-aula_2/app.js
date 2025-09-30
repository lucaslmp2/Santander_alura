alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto);
let chute;
let tentativas = 1;
while(chute!=numeroSecreto){
chute = prompt('Escolha um número entre 1 e 10');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {    
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} de teantaivas`);
        break;
    } else {
        if(numeroSecreto>chute){
            alert(`O numero secreto é maior que o ${chute}.`);
        } else {
            alert(`O numero secreto é menor que o ${chute}.`);
        }
        tentativas += 1;
    }
}
