/* EXERCÍCIO 2

let comidasPreferidas = ["galinhada", "churrasco", "pastiggio", "caldo verde", "macarrão",]
console.log("Minhas comidas preferidas são:")
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

let comidaUsuário = prompt("Qual a sua comida favorita?")
comidasPreferidas[1] = comidaUsuário
console.log(comidasPreferidas)


// EXERCÍCIO 3 //

a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
c) Imprima o array no console
d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
e) Remova da lista o item de índice que o usuário escolheu.
f) Imprima o array no consoleImprima no console 

const frase = prompt("Digite uma frase")
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) 

let listaDeTarefas = []
const tarefa1 = prompt("Digite uma tarefa")
const tarefa2 = prompt("Digite mais uma tarefa")
const tarefa3 = prompt("Digite mais uma tarefa")

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

console.log("Suas tarefas do dia são:", listaDeTarefas)

const tarefaRealizada = prompt("Digite o número da tarefa que você já realizou")

listaDeTarefas.splice(Number(tarefaRealizada), 1)

console.log("As tarefas que você ainda não realizou são:", listaDeTarefas)

DESAFIO

1. Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços
2. Dado o array `["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]`, faça um programa que acha o índice da 
palavra Abacaxi e imprime tanto o índice quanto o tamanho do array

1. 
let frase = "Eu sou a Marina"
const fraseArray = frase.split(" ") //  Split é usado para dividir uma string em pequenos pedaços. Para isso, seu método retorna um array de strings, contendo as respectivas partes, definidas de acordo com a string passada como parâmetro //
console.log(fraseArray)



// AULA 06 - funções 

function imprimeOláMundo() {   //os parenteses possuem variáveis (let, const)
    console.log("Olá Mundo!")
}
imprimeOláMundo()

// Retângulo como Função //

function calculaAreaRetangulo(altura, largura) {
    const area = altura * largura
    console.log("A área do seu retângulo é:", area) // Aqui você escreve o que quer que apareça // 
}
calculaAreaRetangulo(2, 3) //6 --> quando é número não precisa aspaas
calculaAreaRetangulo(3, 5) //15//
calculaAreaRetangulo(6, 4) //24//
calculaAreaRetangulo(12, 13) // 156 //
calculaAreaRetangulo(1, 2) //2 // //Quando for casa décimal usar ponto e não vírgula.

const alturaprompt = prompt("Lança a altura braba!")
const larguraprompt = prompt("Lança a largura, oxi!")

calculaAreaRetangulo(alturaprompt, larguraprompt) // 

// Crie uma função que receba um nome e imprima no console
// "Olá, {nome}", e a invoque com 3 nomes diferentes 

function imprimenome(nome) {
    console.log("Olá", nome, "!") //Quando não tem cálculo, não precisa determinar (const/let)
}
imprimenome("Marina") //Não esquecer das aspas quando for texto //
imprimenome ("Lucrécia")
imprimenome ("Izaura")
/*

// Crie uma função que:
// Receba uma array de números e retorne um novo array com 
dois elementos: o primeiro e o último divididos por dois */

function PegaPrimeiroEUltimoDividepor2(arrayDeNum) {
    const resultado = []
    resultado.push(arrayDeNum[0] / 2)
    resultado.push(arrayDeNum[arrayDeNum.length - 1] / 2)
    return resultado
}
console.log(PegaPrimeiroEUltimoDividepor2([5, 3, 7, 20]))




