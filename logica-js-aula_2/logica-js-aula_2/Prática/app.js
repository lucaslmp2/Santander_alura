{/*
Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
*/}
contador = 1;
while(contador<=10){
    alert(`contagem atual ${contador}`);
    contador++;
}
contadorDecrescente = 10;
while(contadorDecrescente>=0){
    alert(`contagem atual ${contadorDecrescente}`);
    contadorDecrescente--;
}
cronometro = prompt("Digite um número para realizar a contagem regressiva: ");
while(cronometro>=0){
    console.log(`contagem atual ${cronometro}`);
    cronometro--;
}
parada = prompt("Digite um número para realizar a contagem progressiva: ");
cronometroProgressivo = 0;
if(cronometroProgressivo<=parada){
    cronometroProgressivo = 0;
}
while(cronometroProgressivo<=parada){
    console.log(`contagem atual ${cronometroProgressivo}`);
    cronometroProgressivo++;
}