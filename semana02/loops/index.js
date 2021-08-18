// LOOPS //

// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// EXERCÍCIO 1:
/*
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

O resultado mostrado no consolo será 10, pois o laço se encerrará nele. 
O código irá se repetir até o número ser igual ou maior que 5 e terá cada novo valor somado com o anterior. Ou seja:
0+i= 0, 0+1 = 1, 1+2 = 3, 3+3 = 6, 6+4 = 10. 

EXERCÍCIO 2

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
/*
a) O que vai ser impresso no console? Ele irá imprimir todos os números da lista maiores que 18. Ou seja, 19, 21, 23, 25, 27 e 30.

b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente?
Se sim, o que poderia ser usado para fazer isso? 
Sim. Para acessarmos o indíce de cada elemento da lista maior que 18 poderíamos fazer assim:

let indice = 0
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero, "indice:", indice)
	}
    indice++
}

EXERCÍCIO 3

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

// Qual seria o resultado impresso no console, se o usuário digitasse o número 4? 
"*" --> linha 1
"**" --> linha 2
"***" --> linha 3
"****" --> linha 4

EXERCÍCIOS DE ESCRITA DE CÓDIGO:

EXERCÍCIO 1

1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
c) Por fim, imprima o array com os nomes dos bichinhos no console

const pets = Number(prompt("Quantos animais de estimação você tem?"))
if (pets === 0) {
    console.log("Que pena! Você pode adotar um pet")
}

let i = 0
const listaNomesPets = []

while (i < pets){
    const nomesPets = prompt("Qual é o nome deles? Digite um de cada vez!")
    i++
    listaNomesPets.push(nomesPets)
}
console.log(listaNomesPets)

EXERCÍCIO 2

2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
a) Escreva um programa que **imprime** cada um dos valores do array original.
b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array
d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

//2)
const arrayOrginal = [3, 5, 8, 10, 35, 60, 74]

//a)
function numeros (arrayOrginal){
    for(let valor of arrayOrginal){
    console.log(valor)
    }
}
numeros(arrayOrginal)

//b)
function numeros (arrayOrginal){
    for(let valor of arrayOrginal){
    console.log(valor/10)
    }
}
numeros(arrayOrginal)

//c)

function numerosPares (arrayOrginal){
    for(let valor of arrayOrginal){
    if (valor % 2 === 0)
    console.log(valor)
    }
}
numerosPares(arrayOrginal)

//d)

function meuArray (){
  let arrayPalavras = []
  let i = 0
  for(let valor of arrayOrginal){
  arrayPalavras.push(`O elemendo do index ${i} é ${valor}`)
  i++
}
console.log(arrayPalavras)
}
meuArray (arrayOrginal)

//e)
*/
const arrayOrginal = [3, 5, 8, 10, 35, 60, 74]

function maiorEMenor (arrayOrginal){
let maiorNumero = 0;
let menorNumero = Infinity;
for(let i = 0; i < arrayOrginal.length; i++){

    if(arrayOrginal[i] < menorNumero){
     menorNumero = arrayOrginal[i]    
    }else if(arrayOrginal[i] > maiorNumero){
     maiorNumero = arrayOrginal[i]   
    }
  }
  console.log("O maior número é:", maiorNumero)
  console.log("O menor número é:", menorNumero)
}
maiorEMenor (arrayOrginal)

//PRECISO ESTUDAR MAIS. TIVE MUITAS DIFICULDADES PARA FAZER!!!!