//testes//
/*
let resultado
resultado = 3 + 4
console.log('1):',3 + 4)

resultado = 3 * 5 / 2
console.log('2):', resultado)

resultado = (4 - 5) * -1
console.log('3):', resultado)

resultado = 234 % 5
console.log('4):', resultado)

resultado = 1 === "1" //false
console.log('resultado 1:',resultado)
resultado = 1 === 1 //true
console.log('resultado 2:',resultado)

// exercícios//

//treinos//
const fazSol = true
const estaCalor = false
const temPraia = false

const vouParaPraia = fazSol && estaCalor && temPraia

console.log('Vou para praia?', vouParaPraia)
// && - o resultado é true se e somente se todos os valores envolvidos sejam true

const a = true
const b = false
const c = true

const ab = a && b
console.log('1)', ab)

const bc = b && c
console.log('2)', bc)

const ac = a && c
console.log('3)', ac)

const abc = a && b && c
console.log ('4)', abc)

// operador ou || - o resultado só será false, caso todas variáveis sejam false

const estouComFome = true
const estouEmCasa = true
const estouTriste = false 

const vouComerChocolate = estouComFome || estouEmCasa || estouTriste
console.log('Vou comer chocolate?', vouComerChocolate)

// operador NÃO ! - o resultado será o oposto. É uma negação. 

/* const oBrasilGanhouMedalha? = true
const brasilGanhou = oBrasilGanhouMedalha !

console.log('Brasil ganhou medalhas?', oBrasilGanhouMedalha)
*/

//Último exercício//
/*

const nome = prompt ("Insira o seu nome")
const anoDeNascimento = Number(prompt("Insira o ano do seu nascimento"))
const anoAtual = Number(prompt("Insira o ano atual"))

console.log ("Olá", nome,"!")

const idade = anoAtual - anoDeNascimento
console.log('Você tem',idade,'anos')

console.log('É maior de idade?', idade >= 18)

const IdadeFuturo = 2050 - anoDeNascimento
console.log('Você terá:', IdadeFuturo, "em 2050")

EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO

EXERCÍCIO 1

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

//o resultado dessa primeira operação será false, pois é o operador && e mesmo a primeira variável sendo true, a segunda é false.

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

// o resultado dessa segunda operação também será false, pois é o operador && e mesmo a primeira e terceira variáveis sendo true, a segunda é false.

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

// o resultado dessa terceira operação será true, pois o que está dentro dos parenteses, por ser o operador OU, será true. O !Resultado também é true. Comparando ambos com o operador E, dará true, pois os dois são true.

console.log("d. ", typeof resultado)

// o resultado dessa quarta operação será booleanos, pois é a typeof que está sendo ultilizada. 


EXERCÍCIO 2:

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

// É preciso antes do prompt mostrar para o servidor que se trata de um number, caso contrário ele entenderá que é um texto e não um número.
Além disso, como se trata de um número que pode sempre ser alterado precisamos usar "let" e não "const"


EXERCÍCIO 3:

let primeiroNumero = Number(prompt("Digite um número"))
let segundoNumero = Number(prompt("Digite outro número!"))

let soma 
soma = primeiroNumero + segundoNumero

console.log("A soma dos números é: ", soma)

EXERCÍCIO DE ESCRITA DE CÓDIGO:

EXERÍCIO 1:

a) Pergunte a idade do usuário
b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)

let suaIdade = Number(prompt("Insira a sua idade"))
let idadeAmigo = Number(prompt("Insira a idade do seu melhor amigo"))
let resultado = suaIdade >= idadeAmigo
console.log("Sua idade é maior do que a do seu melhor amigo?", resultado)
let diferençaIdade = suaIdade - idadeAmigo
console.log("A diferença de idade entre vocês é de", diferençaIdade, "anos")

EXERÍCIO 2:

a) Peça ao usuário que insira um número **par**
b) Imprima na console **o resto da divisão** desse número por 2.
c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código 

let númeroPar = Number(prompt("Insira um número par"))
let resultado = númeroPar % 2
console.log("o resto dessa divisão pelo número 2 é", resultado)

c) Sim. Digitando um número par o resultado será sempre 0, independente do número que inserirmos.
d) Sim. Digitando um número ímpar o resultado será sempre 1, independente do número que inserirmos. 

EXERCÍCIO 3:

Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
a) A idade do usuário em meses
b) A idade do usuário em dias
c) A idade do usuário em horas 

let idade = Number(prompt("Insira a sua idade aqui"))
let a = idade * 12
console.log("você tem", a, "meses")
let b = idade * 365
console.log("você tem", b, "dias")
let c = idade * 8760
console.log("Você tem",c, "horas")

EXERCÍCIO 4
Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:
O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true */

let numero1 = Number(prompt("Insira um número"))
let numero2 = Number(prompt("Insira outro número"))

let a = numero1 > numero2
console.log("O primeiro número é maior que o segundo?", a)

let b = numero1 === numero2
console.log("O primeiro número é igual ao segundo?", b)

let c = numero1 % numero2 === 0
console.log("O primeiro número é divisível pelo segundo?", c)

let d = numero2 % numero1 === 0
console.log("O segundo número é divisível pelo primeiro?", d)

















