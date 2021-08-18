// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
const altura = Number(prompt("Qual a altura?"))
const largura = Number(prompt("Qual é a largura?"))
console.log(altura * largura)
}



// EXERCÍCIO 02
function imprimeIdade() {
const anoAtual = Number(prompt("Qual é o ano atual?"))
const anoNascimento = Number(prompt("Qual é o ano do seu nascimento?"))
console.log(anoAtual - anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
const imc = (peso / (altura * altura))
return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
nome = prompt("Qual é o seu nome?")
idade = prompt("Quantos anos você tem?")
email = prompt("Qual o seu e-mail")
dadosUsuário = (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
console.log(dadosUsuário)
}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
const cor1 = prompt("Insira uma cor")
const cor2 = prompt("Insira outra cor")
const cor3 = prompt("Agora a última cor")
let array = [cor1, cor2, cor3]
console.log(array)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(frase) {
  fraseFinal = frase.toUpperCase()
  return fraseFinal

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorDoIngresso) {
  const quantidadeIngressos = custo / valorDoIngresso
  return quantidadeIngressos

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const resultado = string1.length === string2.length
  return resultado 
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const primeiroElemento = array[0]
  return primeiroElemento

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const numeroElementos = array[array.length - 1]
  return numeroElementos

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiroElemento = array[0]
  const ultimoElemento = array[array.length - 1]
  array[0] = ultimoElemento
  array[array.length - 1] = primeiroElemento
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {

  const igualdade = Boolean(string1.toUpperCase() === string2.toUpperCase())
  return igualdade 
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}