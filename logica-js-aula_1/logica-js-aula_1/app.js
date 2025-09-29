alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 4;
console.log('Número secreto é:', numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 10');
console.log('O chute é:', chute);

if (chute == numeroSecreto) {
    console.log(`Isso ai! Você descobriu o número secreto que é:  ${numeroSecreto}`);
    alert(`Isso ai! Você descobriu o número secreto que é:  ${numeroSecreto}`);
}else{
    console.log(`Que pena! O número secreto era:  ${numeroSecreto}`);
    alert(`Que pena! O número secreto era:  ${numeroSecreto}`);
}