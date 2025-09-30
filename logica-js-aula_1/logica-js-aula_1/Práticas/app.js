{/*
Desafios

1. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

2. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

3. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

4. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

5. Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

*/}
let diaDaSemana = prompt('qual o dia da semana?');
if (diaDaSemana === "sabado"){
    alert("Bom fim de semana!");
}
else if(diaDaSemana === "domingo"){
    alert("Bom fim de semana");
}else{
    alert("Boa semana!");
}
let numero = prompt('Digite um numero para verificar se é negativo ou positivo.');
if(numero>=0){
    alert(`${numero} é pósitivo`);
}else{
    alert(`${numero} é negativo`);
}
pontos = 0;
pontuação = 0;
let resposta1 = prompt("qual o número que representa o valor de 1 bit? ");
if(resposta1 == "0,125"){
    pontos = pontos + 20;
}
let resposta2 = prompt("qual o pai da I.A? ");
if(resposta2 === "Alan Turing"){
    pontos = pontos + 20;
}
let resposta3 = prompt("qual o buscador mais famoso atualmente? ");
if(resposta3 == "Google"){
    pontos = pontos + 20;
}
let resposta4 = prompt("Que animal representa um erro na programação?");
if(resposta4 == "Bug"||"Besouro"||"Inseto"){
    pontos = pontos + 20;
}
let resposta5 = prompt("Qual o sistema operacional gratuito e opensource mais ultilizado no mercado? ");
if(resposta5 == "Linux"){
    pontos = pontos + 20;
}
pontuação = pontos;
if(pontuação>=100){
    alert("Parabéns, você venceu!");
}else{
    alert("Tente novamente para ganhar.");
}
let usuario = prompt("Qual o seu nome?");
saldo = 897.45;
alert(`Olá${usuario} o seu saldo atual é de R$${saldo}.`);
let nomeUsuario = prompt("Qual o seu nome? ");
alert(`Seja, bem vindo! ${nomeUsuario}`);