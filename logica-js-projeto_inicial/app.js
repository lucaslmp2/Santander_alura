alert('Boas Vindas! ao nosso site.');
//let nome = "Lua";
//let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let menssagemDeErro = "Erro! Preencha todos os campos";
alert(menssagemDeErro);
let nome = prompt('Digite o seu nome: ');
let idade = prompt('Digite a sua idade: ');
if(idade<18){
    alert('Não pode dirigir!')
}else{
    alert('Pode dirigir!')
}
