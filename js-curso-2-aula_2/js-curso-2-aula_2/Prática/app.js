{/*
Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
*/}

let mensagemNaTela = document.querySelector('h2');

function calcularIMC(){
    let IMC = 0;
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    IMC = peso / (altura * altura);
    limparCampos();
    return mensagemNaTela.innerHTML = IMC.toFixed(2.0);   
}

function limparCampos(){
   peso = document.getElementById('peso');
   peso.value = '';
   altura = document.getElementById('altura');
   altura.value = '';
}

function calculadoraFatorial(){
    let fatorial = document.getElementById('fatorial').value;
    let aux = 0;
    if(fatorial==1||fatorial==0){
        fatorial = 1;
    }else{
        for(let i = fatorial-1; i>=1; i--){
            aux = fatorial * i;
            fatorial = aux;
        }
    }
    return mensagemNaTela.innerHTML = fatorial;
}
function conversaoDolarReal(){
    let valor = document.getElementById('converter').value;
    return mensagemNaTela.innerHTML = valor * 4.80;
}
function calculoArea(){
    let base = document.getElementById('base').value;
    let alturaRetangular = document.getElementById('alturaRetangular').value;
    return mensagemNaTela.innerHTML = `Área:    ${base * alturaRetangular}cm²`;
}