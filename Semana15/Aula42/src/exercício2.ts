//EXERCÍCIO 2
//A) A entrada é o array de números "Numeros" e a saída é "estatisticas"


type Estatisca = {
    maior: number,
    menor: number,
    media: number
}


function obterEstatisticas(numeros: number[]) : Estatisca {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: Estatisca = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([23,45,81]))

//C)

// const amostraDeIdades = {
// numeros: [21, 18, 65, 44, 15, 18],
// obterEstatisticas: (numeros) => {...}
// }

type amostraDeIdades = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => Estatisca
}
