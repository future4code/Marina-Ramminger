//CONDICIONAIS

// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDICO

//EXERCÍCIO 1
/*
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
a) Explique o que o código faz. Qual o teste que ele realiza? O código irá informar se o número é ou não par. 
b) Para que tipos de números ele imprime no console "Passou no teste"? Para números divisíveis por 2, ou seja, números pares
c) Para que tipos de números a mensagem é "Não passou no teste"? Para números ímpares. 

EXERCÍICO 2 

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
/*
a) Para que serve o código acima? O códico acima serve para verificar a disponibilidade da fruta e o seu preço.
b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`? "O preço da fruta maçã é R$ 2,25"
c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` 
que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")? Não daria para ler o código.

EXERCÍCIO 3

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)


a) O que a primeira linha está fazendo? A primeira linha está solicitando um número para o usuário
b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10? 
Caso fosse 10: "Esse número passou no teste", Caso fosse -10: "Mensagem is not defined", pois não tem mensagem definida o número sendo menor que 0. Não tem o "else".
c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo. 
Sim, haverá erro quando o número for menor que 0, pois no escopo não está definido o "else"

EXERÍCIOS DE ESCRITA DE CÓDIGO 

EXERÍCIO 01 
Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir.
 Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."` 
 
 const idade = number(prompt("Insira sua idade"))
 if (idade >= 18) {
     console.log("Você pode dirigir");
 } else {
     console.log("Você não pode dirigir");
 }

EXERCÍCIO 02

Faça um programa que verifica que turno do dia um aluno estuda. 
Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno).
Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" 


function turnoEstudo(M, V, N){
if (M === "M") {
    console.log("Bom dia!");
} else if (V === "V") {
    console.log("Boa tarde!");
}else if (N === "N") {
    console.log("Boa noite!");
} else {
    console.log("Digite um turno válido!")
}
} 
const turnoUsuário = prompt("Qual o seu turno? Digite M para matutino, V para vespertino ou N para noturno")
turnoEstudo(turnoUsuário) 

// EXERCÍCIO 3 
/*

const turno = prompt("Qual o seu turno? Digite M para matutino, V para vespertino ou N para noturno")
switch(turno){
  case "M":
    console.log("Bom dia!")
    break
  case "V":
    console.log("Boa tarde!")
    break 
  case "N":
    console.log("Boa noite!")
    break
}

EXERCÍCIO 4

Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você 
se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual 
o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga 
vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, 
imprima "Escolha outro filme :("


const genero = prompt("Qual o gênero do filme?")
const valor = Number (prompt("Qual o valor do ingresso?"))

if (genero === "fantasia" && valor < 15) {
        console.log("Bom filme!")
    } else {
     console.log ("Escolha outro filme. :(")
    }

    */ 