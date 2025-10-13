{/*
Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
*/}

let mensagemNaTela = document.querySelector('h2');
let tabuadaNaTela = document.getElementById('resultado');
let fatorialNaTela = document.getElementById('fatorialResultado');
let conversaoNaTela = document.getElementById('conversaoResultado');
let areaNaTela = document.getElementById('areaResultado');
let areaCircularNaTela = document.getElementById('areaCircularResultado');

function calcularIMC(){
    let IMC = 0;
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    IMC = peso / (altura * altura);
    
    return mensagemNaTela.innerHTML = `O IMC de ${peso}kg e ${altura}m é de ${IMC.toFixed(2.0)}`;   
}



function calculadoraFatorial(){
    let fatorial = document.getElementById('fatorial').value;
    let numero = fatorial;
    let aux = 0;
    if(fatorial==1||fatorial==0){
        fatorial = 1;
    }else{
        for(let i = fatorial-1; i>=1; i--){
            aux = fatorial * i;
            fatorial = aux;
        }
    }

    return fatorialNaTela.innerHTML = `O fatorial de ${numero} é ${fatorial}`;
}
function conversaoDolarReal(){
    let valor = document.getElementById('converter').value;
    
    return conversaoNaTela.innerHTML = `O valor de $${valor}.00 dólares em reais é R$ ${(valor * 4.80).toFixed(2.0)}`;
}
function calculoArea(){
    let base = document.getElementById('base').value;
    let alturaRetangular = document.getElementById('alturaRetangular').value;
    
    return areaNaTela.innerHTML = `Área: ${base * alturaRetangular}cm²`;
}
function calculoAreaCircular(){
    let raio = document.getElementById('raio').value;
    let area  = (raio * raio) * 3.14;
    
    return areaCircularNaTela.innerHTML = `Área do círculo é de ${area}cm²`;
}
function calcularTabuada(){
    let numero = document.getElementById('numero').value;
    let tabuada = '';
    for(let i = 1; i<=10; i++){
        tabuada += `${numero} x ${i} = ${numero * i} <br>`;
    }
    for(let i = 1; i<=10; i++){
        tabuada += `${numero} / ${i} = ${numero / i} <br>`;
    }
    for(let i = 1; i<=10; i++){
        tabuada += `${numero} - ${i} = ${numero - i} <br>`;
    }
    for(let i = 1; i<=10; i++){
        numero = parseFloat(numero);
        tabuada += `${numero} + ${i} = ${numero + i} <br>`;
    }
    
    return tabuadaNaTela.innerHTML = tabuada.fixed(2.0);
}
