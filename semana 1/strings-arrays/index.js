// Concatenação de Strings//
/*
const nome = "Marina Pereira"
const idade = "26"

const frase = "Oi! Meu nome é " + nome + " e eu tenho " + idade + " anos"
const frase2 = `Oi! Meu nome é ${nome} e eu tenho ${idade} anos`

console.log("Concatenação:",frase)
console.log("Template String:", frase2)


// Exercício 1

const nomeUsuario = prompt("Insira seu nome")
const corFavorita = prompt("Qual é a sua cor favorita?")

const frase3 = `A cor favorita de ${nomeUsuario} é ${corFavorita}`
console.log(frase3)

// O comando "length" mostra a quantidade de caracteres da sua palavra ou frase
console.log(nome.length)

// O comando "toLowerCase()" deixa todas as letras da frase em minúsculo
console.log(nome.toLowerCase())

// O comando "trim()" tira os espaços do ínicio e do final da frase
const fraseComEspaço = "  Fui a praia e não consegui voltar  "
console.log(fraseComEspaço.trim())


// O comando replaceAll substitui uma palavra pela outra//

const fraseCenoura = "Hoje eu comi cenoura, adoro cenoura"
const fraseBatata = fraseCenoura.replaceAll("cenoura", "batata")
const fraseAmo = fraseBatata.replaceAll("adoro", "amo")
const fraseMinuscula = fraseCenoura.toLowerCase().replaceAll("cenoura","couve")

console.log(fraseCenoura)
console.log(fraseBatata)
console.log(fraseAmo)
console.log(fraseMinuscula)


//EXERCÍCIO 2//

let fraseUsuário = prompt("Insira uma frase")
let fraseModificada = fraseUsuário.toUpperCase().replaceAll("A","I").replaceAll("E","I").replaceAll("O","I").replaceAll("U", "I")
console.log(fraseUsuário)
console.log(fraseModificada)
console.log("Tamanho da frase:", fraseUsuário.length)
console.log("A frase possui mais de 10 caracteres?", fraseUsuário.length < 40)

----- ARRAYS 

let listaDeJogos = ["Mario", "CSS", "Undertale"]
console.log(listaDeJogos["1"]) 
// --- Para saber o tamanho da lista usar "length" //
console.log(listaDeJogos.length)

// --- Não esquecer o NUMBER quando está se pedindo um numeral! //
const cachorros = ["Vira-lata caramelo", "Poodle", "Pug", "Husky", "Yorkshire"]
let numeroUsuario = Number(prompt("Insira um número de 1 a 5"))

// --- Não esquecer o "-1" já que a lista começa a contar do zero!!!!! //
console.log(cachorros[numeroUsuario-1])

const frutas = ["banana", "morango", "abacaxi", "goiaba"]
console.log(frutas.length) // mostra a quantidade de itens da minha lista
console.log(frutas) // mostra os itens da minha lista
frutas.push("laranja") // push --> adiciona a minha lista um item
console.log(frutas) // item atualizado com a minha adição

frutas.pop() // pop --> remove o último item da minha lista 
frutas.pop() // se continuar usando remove outro item da minha lista. Nesse caso, o penúltimo.
console.log(frutas) // item atualizado com a minha remoção

console.log(frutas.includes("bergamota")) //me responde com true ou false se tem na minha lista a palavra escolhida
console.log(frutas.includes("banana")) // importante sempre lembrar de colocar o nome exatamente igual. Caso fosse "Banana", ele responderia com um false


// EXERCÍCIOS DE INTERPRETAÇÃO //

let array
console.log('a. ', array) // array não foi definida

array = null
console.log('b. ', array) // null é um valor nulo ou vazio

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // irá aparecer o número 11, pois length é o comando que nos dará a quantidade de elementos dentro de um array

let i = 0
console.log('d. ', array[i]) // irá aparecer o número 3, pois ele é o elemento 0 do array.

array[i+1] = 19
console.log('e. ', array) // o array tem apenas 11 itens. Sendo assim, não será possível encontrar o elemento 19º.

const valor = array[i+6]
console.log('f. ', valor)// irá aparecer o número 9, pois ele é o sétimo elemento do array. Lembrando que o primeiro elemento é 0.

/* Leia o código abaixo com atenção: 

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // A frase ficará toda em letra MAISCULA e todas as letras "A" serão substituídas pela letra "I". No final me mostrará a quantidade de caracteres.

// Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"? 
// SUBI NUM ÔNIBUS PIRI MIRROCOS 29 (NÚMERO TOTAL DE CARACTÉRES) 

EXERCÍCIOS DE ESCRITA DE CÓDIGO 

EXERCÍCIO 1

let nome2 = prompt("Digite seu nome")
let emailUsuario = prompt("Digite seu e-mail")
console.log("O e-mail", emailUsuario, "foi cadastrado com sucesso! Seja bem-vindo", nome2,"!")

EXERCÍCIO 2

Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
a) Imprima no console o array completo
b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário.
Imprima no consolea nova lista
*/

/*
console.log("Essas são minhas comidas preferidas:", comidasPreferidas.splice(4,4)) // macarrão
console.log(comidasPreferidas.splice(3,3)) // caldo verde
console.log(comidasPreferidas.splice(2,2)) // pastiggio
console.log(comidasPreferidas.splice(1,1)) // churrasco
console.log(comidasPreferidas.splice(0,1)) // galinhada */

let comidasPreferidas = ["galinhada", "churrasco", "pastiggio", "caldo verde", "macarrão",]
console.log(comidasPreferidas)

let comidaUsuário = prompt("Qual a sua comida favorita?")
comidasPreferidas[i+1] = comidaUsuário
console.log(comidasPreferidas)
