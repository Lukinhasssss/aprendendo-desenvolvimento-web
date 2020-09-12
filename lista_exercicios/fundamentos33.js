/* Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
 * quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
 * Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
 * mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console. */


let vetorInteiro = [10, 20, 30, 40]
let vetorString = ['Destiny 3', 'Xbox Series X', 'Monster Hunter World: Iceborn', 'Xiaomi']
let vetorDouble = [249.90, 3199.00, 119.90, 1473.92]

function unirVetores (...args) {
    resultado = []

    for (let i = 0; i < arguments.length; i++) {
        resultado = resultado.concat(arguments[i])
    }

    return resultado

}

console.log(unirVetores(vetorInteiro, vetorDouble))
console.log('-------------------------------------------------')
console.log(unirVetores(vetorDouble, vetorString))
console.log('-------------------------------------------------')
console.log(unirVetores(vetorInteiro, vetorString, vetorDouble))