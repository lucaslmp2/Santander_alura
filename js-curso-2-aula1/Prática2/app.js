{/*
Criar uma função que exibe "Olá, mundo!" no console.

Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

Criar uma função que recebe três números como parâmetros e retorna a média deles.

Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo     
*/}
function olaMundo(){
    console.log('Olá, Mundo!');
}
function olaUser(){
    let usuario = prompt('Digite seu nome: ');
    console.log(`Olá, ${usuario}!`);
}
let duplicado = document.querySelector('h1');
function duplicarNumero(){
    let numero = document.querySelector('input').value;
    let aux = numero * 2;
    duplicado.innerHTML = `O dobro de ${numero} é ${aux}.`;
}

let media = document.querySelector('h1');

function calcularMedia(){
    let num = parseInt(document.getElementById('num1').value);
    let num1 = parseInt(document.getElementById('num2').value);
    let num2 = parseInt(document.getElementById('num3').value);
    let aux = (num + num1 + num2) / 3;
    media.innerHTML = `A média entre ${num}, ${num1} e ${num2} é ${aux.toFixed(2)}.`;
}

let maiorNumero = document.querySelector('h1'); 

function calcularMaiorNumero(){
    let num = parseInt(document.getElementById('num1').value);
    let num1 = parseInt(document.getElementById('num2').value);
    if(num > num1){
        maiorNumero.innerHTML = `O número ${num} é maior que o número ${num1}`;
    }else if(num == num){
        maiorNumero.innerHTML = `O número ${num1} é igual o número ${num}`;
    }else{
        maiorNumero.innerHTML = `O número ${num1} é maior que o número ${num}`;
    }
}

let multiplicado = document.querySelector('h1');

function multiplicaNumero(){
    let num = parseInt(document.getElementById('multiplica').value);
    let aux = num * num;
    multiplicado.innerHTML = `A multiplicação de ${num} por ${num} é ${aux}`
}