// OBJETOS

// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO 

// EXERCÍCIO 1 

/* const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) // Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1]) // Virginia Cavendish
console.log(filme.transmissoesHoje[2]) // O código não lerá, pois não pode ter duas informações diferentes dentro de um mesmo array

// EXERCÍCIO 2 

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) // Nome: Juca, idade: 3, raça: SRD
console.log(gato) // Nome: Juba, idade: 3, raça: SRD
console.log(tartaruga) // Jubo, idade: 3, raça: SRD

// a) O que vai ser impresso no console?
// b) O que faz a sintaxe dos três pontos antes do nome de um objeto? Permite que a gente faça uma cópia do objeto ou acesse alguma das suas propriedades.

// EXERCÍCIO 3 

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

//a) O que vai ser impresso no console? false / undefined 
// b) Explique o valor impresso no console. Você sabe por que isso aconteceu? Não aparecerá valor, pois "altura" não foi definido.

// EXERCÍCIO DE ESCRITA DE CÓDIGO //

// EXERÍCIO 1 

a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). 
Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

const pessoa = {
    nome: "Marina", 
    apelidosMarina: ["Nina", "Ma", "Mari"]
 }
 const nomeMarina = pessoa.nome
 const apelidos = pessoa.apelidosMarina
 const apelido1 = apelidos[0]
 const apelido2 = apelidos[1]
 const apelido3 = apelidos[2]
 console.log("Eu sou", nomeMarina, ",mas pode me chamar de", apelido1, ",", apelido2, "ou", apelido3, ".")
//b) 
const novosApelidos = {...pessoa, apelidosMarina: ["Xu", "Mima", "Mar"]}
console.log(novosApelidos)

 // EXERCÍCIO 2

a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

1. O valor de `nome`
2. O numero de caracteres do valor `nome`
3. O valor de `idade`
4. O valor de `profissão`
5. O numero de caracteres do valor `profissão` 

const pessoa1 = {
    nome: "Lívia",
    idade: 25,
    profissão: "gestora pública"
}
const pessoa2 = {
    nome: "Ana Beatriz",
    idade: 28,
    profissão: "linguista"
}
const novaFuncao=(pessoa1, pessoa2) => {return[pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissão, pessoa1.profissão.length]
}
console.log(novaFuncao(pessoa1))
console.log(novaFuncao(pessoa2)) 

// EXERCÍCIO 3

a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: 
nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 
d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos. 
*/

const carrinho = []

const fruta1 ={
    nome: "Uva", 
    disponibilidade: true
}
const fruta2 =  {
    nome: "Melancia", 
    disponibilidade: true
}
const fruta3 = {
    nome: "Laranja", 
    disponibilidade: true
}

function funcaoFruta(fruta1, fruta2, fruta3){
    }
    
carrinho.push(fruta1)
carrinho.push(fruta2)
carrinho.push(fruta3)

funcaoFruta(fruta1)
funcaoFruta(fruta2)
funcaoFruta(fruta3)

console.log(carrinho)
