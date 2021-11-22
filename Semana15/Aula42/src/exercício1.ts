console.log("Hello World!")

// //EXERCÍCIO A:
// let minhaString: string = "Marina"
// minhaString = 9 //Ele diz que o tipo "number" não pode ser atribuído ao tipo "string".

//EXERCÍCIO B:
let meuNumero: number = 25
// Para aceitar número ou string podemos usar o "|":
let meuNumero2: number | string = ""
meuNumero2 = "marina"
meuNumero2 = 34

//EXERCÍCIO C e D:

enum Cores {
VERMELHO = "Vermelho", 
LARANJA = "Laranja",
AMARELO = "Amarelo", 
VERDE = "Verde",
AZUL = "Azul", 
VIOLETA = "Violeta"
}

type User = {
    nome: string,
    idade: number,
    corFavorita: Cores,
}

const user1: User = {
    nome: "Marina",
    idade: 26,
    corFavorita: Cores.AMARELO
}

const user2: User = {
    nome: "Lívia",
    idade: 26,
    corFavorita: Cores.VERDE
}

const user3: User = {
    nome: "Amanda",
    idade: 20,
    corFavorita: Cores.VERMELHO
}