/*
function numeroImpar(numero, callback) {
    if (numero % 2 !== 0)
    callback(numero)
}

numeroImpar(3, 
    () => {console.log("Sim, é ímpar")
})

EXERCÍCIO TESTE:

const arrayTeste = [10, 11, 12, 13, 14, 15]

const novoArraYteste = arrayTeste.map(
    (numero, i, array) => {
    const novoArraYteste = `O elemento ${i} é ${numero}`
    return novoArraYteste
    }
)

console.log(novoArraYteste) // todos os números da array
console.log(novoArraYteste[2]) // apenas o elemento que você precisa

/*
EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

EXERCÍCIO 1

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]
const novoArrayA = usuarios.map((item, index, array) => {
   console.log(item, index, array)
})
/*
a) O que vai ser impresso no console? 
Ele irá imprimir os três objetos existentes no array e a sua posição(seu índice). Ou seja:
{nome: "Amanda Rangel", apelido: "Mandi"} 0
{nome: "Laís Petra", apelido: "Laura"} 1
{nome: "Letícia Chijo", apelido: "Chijo"} 2


EXERCÍCIO 2

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]
const novoArrayB = usuarios.map((item, index, array) => {
   return item.nome
})
console.log(novoArrayB)

a)O que vai ser impresso no console? 
Ele irá formar um novo array contendo apenas os nomes dos objetos.
["Amanda Rangel, "Laís Petra", "Letícia Chijo"]


EXERCÍCIO 3

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  console.log(novoArrayC)

a) O que vai ser impresso no console? Ele irá retornar uma nova array e sua respectiva a posição (index) com 
exceção do elemento que contém o apelido "Chijo". Ou seja:  
[0 {nome: "Amanda Rangel", apelido: "Mandi"}
 1 {nome: "Laís Petra", apelido: "Laura"}]


EXERCÍCIOS DE ESCRITA DE CÓDIGO

EXERCÍCIO 1:

a) Crie um novo array que contenha apenas o nome dos doguinhos
b) Crie um novo array apenas com os [cachorros salsicha]
c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"


const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
//a) 
 const nomePets = pets.map((item, index, array) => {
    return item.nome
 })
 console.log(nomePets)

 //b)
 const cachorroSalsicha = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
 })
 console.log(cachorroSalsicha)

 //c)

 const mensagemPoodle = pets.filter((item, index, array) => {
    return item.raca === "Poodle"
 })
 const racaPoodle = mensagemPoodle.map(pet => pet.nome)

 console.log(`Você ganhou ganhou um cupom de desconto de 10% para tosar o/a ${racaPoodle[0]}`)
 console.log(`Você ganhou ganhou um cupom de desconto de 10% para tosar o/a ${racaPoodle[1]}`)

 EXERCÍCIO 2:

a) Crie um novo array que contenha apenas o nome de cada item
b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
*/
const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
/*
//a)
const nomeProdutos = produtos.map((item, index, array) => {
    return item.nome
 })
 console.log(nomeProdutos)

 //b)
 const nomeEProdutosDescontos = produtos.map((array) => {
    const nome = array.nome
    const preco = (Number(array.preco)* 0.95).toFixed(2)
    return {nome, preco}
 })
console.log(nomeEProdutosDescontos)

//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
const arrayBebidas = produtos.filter((item, index, array) => {
   return item.categoria === "Bebidas"
})
console.log(arrayBebidas)


// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

const produtosYpe = produtos.filter((item, index, array) => {
   return item.nome.includes("Ypê")
})
console.log(produtosYpe)

//e) e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
// Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

const ypeComFrase = produtosYpe.map(produtosYpe => `Compre ${produtosYpe.nome} por ${produtosYpe.preco}`)
console.log(ypeComFrase)
/*