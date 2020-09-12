/* Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente */

// Fazendo pelo método antigo
const potencia1 = (base, expoente) => {
    return Math.pow(base, expoente)
}

console.log(potencia1(3, 4))

console.log('-------------------')

const potencia2 = (base, expoente) => {
    let resultado = base ** expoente
    return resultado
}

console.log(potencia2(2, 8))