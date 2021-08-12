// AULA 06 - funções 
/*
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
dois elementos: o primeiro e o último divididos por dois 

function PegaPrimeiroEUltimoDividepor2(arrayDeNum) {
    const resultado = []
    resultado.push(arrayDeNum[0] / 2)
    resultado.push(arrayDeNum[arrayDeNum.length - 1] / 2)
    return resultado
}
console.log(PegaPrimeiroEUltimoDividepor2([5, 3, 7, 20])) 

//EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO
// EXERCÍCIO 1:

//a) O que vai ser impresso no console?

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2)) // Ele irá calcular a variável x 5. Nessa primeira função o resultado será 10.
console.log(minhaFuncao(10)) // Nessa segunda função o resultado será 50. */

//b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?

// Ele não imprimirá nada, pois não irá reconhecer o comando. É uma ação inválida. 

// EXERCÍCIO 2

// a. Explique o que essa função faz e qual é sua utilidade

// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//  i.   `Eu gosto de cenoura`
//  ii.  `CENOURA é bom pra vista`
//  iii. `Cenouras crescem na terra` 
/*
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta) */

//a. Essa função irá pegar a frase inserida pelo usuário e deixá-la toda com letra minúscula. A partir disso, irá retornar
// com um "true" ou "false" para o fato de ter na frase a palavra cenoura. Sua utilidade será encontrar a palavra "cenoura"
// independente se tiver sido escrita com letra maiscula ou minuscula.
//b.i. true
//b.ii. true
//b.iii. false --> aqui a cenoura está no plural. Sendo assim, ele não irá identificar como sendo a mesma palavra.  
//b.iii (correção): fui testar no console e o me retornou com um "true", ou seja, como o plural de cenoura é CENOURAs, ele idenfica que contém na frase. O mesmo acontece com a palavra Cenourao.

//EXERCÍCIO DE ESCRITA DE CÓDIGO

// EXERCÍCIO 1

/* Escreva as funções explicadas abaixo:
a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:
Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.




function dados(nome, idade, cidade, profissão) {
    const meusDados = ("Eu sou " + nome + " tenho " + idade + " anos, moro em " + cidade + " e sou " + profissão)
    console.log(meusDados)
}
dados("Marina", 29, "Porto Alegre", "estudante") 


function dados(nome, idade, cidade, profissão) {
    const meusDados = (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}`) // CRASE!!!!!
    console.log(meusDados)
}
dados("Marina", 29, "Porto Alegre", "estudante")


b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: 
o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`).
Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template
Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO] 


function dados(nome, idade, endereço, profissão) {
    const dadosUsuário = (`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereço} e sou ${profissão}`)
    console.log(dadosUsuário)
}

const nome = prompt("Qual é o seu nome?")
const idade = prompt("Quantos anos você tem?")
const endereço = prompt("Qual o seu endereço")
const profissão = prompt("Qual a sua profissão?")

dados(nome, idade, endereço, profissão) 

// EXERÍCIO 2

a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e 
retorne o resultado. Invoque a função e imprima no console o resultado.
b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, 
juntamente com uma versão dela em letras maiúsculas.

//a) 
function soma(numero1, numero2) {
    const somaNúmeros = numero1 + numero2
    console.log("A soma dos dois números é:", somaNúmeros)
}
soma(12, 33) 

//b) //

function Boolean(numero1, numero2) {
    const resultado = numero1 >= numero2
    console.log("O primeiro número é maior que o segundo?:", resultado)
}
Boolean(13,47) 

//c) //

function Boolean(númeroParOuImpar) {
    const resultado = númeroParOuImpar % 2 === 0
    console.log("O número é par?", resultado)
}
Boolean(11)

d) 

function mensagem(texto1, texto2) {
    texto1 = "Coisa boa é aprender código".toLocaleUpperCase()
    texto2 = "Coisa boa é aprender código".length
    console.log(texto1, texto2)
}
mensagem() 

EXERÍCIO 3 

Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados
pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
Números inseridos: 30 e 3
Soma: 33
Diferença: 27
Multiplicação: 90
Divisão: 10 */



const numero1 = Number(prompt("Insira um número"))
const numero2 = Number(prompt("Insira um novo número"))

function soma(numero1, numero2) {
console.log("A soma dos números é:", numero1 + numero2)
}
soma(numero1, numero1)

function subtração(numero1, numero2) {
console.log("A subtração dos números é:", numero1 - numero2)
    }
subtração(numero1, numero2)

function multiplicação(numero1, numero2) {
console.log("A multiplicação dos números é:",numero1 * numero2)
    }
multiplicação(numero1, numero2)

function divisão(numero1, numero2) {
console.log("A divisão dos números é:", numero1 / numero2)
    }
divisão(numero1, numero2)

// FIIIIIIIIIIIIIM // 