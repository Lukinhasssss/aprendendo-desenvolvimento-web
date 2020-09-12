/* Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
 * inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
 * elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
 * o valor do elemento for maior que 5. */


let vetor = [6, 7, 5, 12, 1]

// Início Função 1
const multiplicaVetor  = (vetor, numeroInteiro) => {
    let resultado = []
    for (let i = 0; i < vetor.length; i++) {
        resultado = resultado.concat(vetor[i] * numeroInteiro)
    }

    return resultado

} // Fim Função1

// Início Função 2
const multiplicaVetor2 = (vetor, numeroInteiro) => {
    let resultado = []
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > 5) {
            resultado = resultado.concat(vetor[i] * numeroInteiro)
        } if (vetor[i] >= 0 || vetor[i] <= 5) {
            return `Não foi possível realizar a operação, pois há elementos menores do que 5.`
        }
    }

    return `O resultado é: ${resultado}`

} // Fim Função 2

console.log(multiplicaVetor(vetor, 2))
console.log('-----------------------------------------------------------------------------------')
console.log(multiplicaVetor2(vetor, 3))
console.log('-----------------------------------------------------------------------------------')


// OUTRA FORMA DE FAZER A FUNÇÃO 1
function multiplicaVetor3(vetor, multiplicador){
    let vetorResultado = []
    vetor.forEach(elemento => {
        vetorResultado.push(elemento * multiplicador)
    });

    return vetorResultado
}

console.log(multiplicaVetor3(vetor, 3))