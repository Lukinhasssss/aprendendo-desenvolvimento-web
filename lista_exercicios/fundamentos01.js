/* Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
 * multiplicação e divisão desses valores. */


 function calculoOperacoes(x, y) {
    let soma = x + y
    let subtracao = x - y
    let multiplicacao = x * y
    let divisao = x / y
    console.log(`Soma = ${soma}\nSubtração = ${subtracao}\nMultiplicação = ${multiplicacao}\nDivisão = ${divisao.toFixed(2)}`) // .toFixed define o número de casas decimais
}

calculoOperacoes(7, 3)

console.log('-----------------------------')

// Utilizando arrow function
const calculoOperacoes2 = (x, y) => {
    return ("Soma = " + (x+y) + "\nSubtração = " + (x-y) + "\nMultiplicação = " + (x*y) + "\nDivisão = " + (x/y).toFixed(2))
}

console.log(calculoOperacoes2(120, 21))