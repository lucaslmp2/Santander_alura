{/*
Faça o download de outro projeto clicando neste link e abra no Visual Studio Code.

Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.    
*/}
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function alerta() {
    console.log('O botão foi clicado');
    alert("Eu amo JS");
}

function enviarCidade(){
    console.log('O botão foi clicado');
    let pergunta = document.querySelector('h1');
    pergunta.innerHTML = 'Digite o nome de uma cidade do Brasil.';
    let resposta = document.getElementById('resposta').value;
    alert(`Estive em ${resposta} e lembrei de você.`);
}

function somarNumeros(){
    console.log('O botão foi clicado');
    let numero1, numero2, resultado;
    numero1 = prompt('Digite o primeiro número.');
    numero2 = prompt('Digite o segundo número.');
    resultado = parseInt(numero1) + parseInt(numero2);
    alert(`A soma dos dois números ${numero1} e ${numero2} é igual a ${resultado}.`);
}