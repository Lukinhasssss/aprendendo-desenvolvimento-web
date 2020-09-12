/* Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros. */

vetor1 = [5.0, 7.7, 9.3, 9.8]
vetor2 = [2.0, 2.6, 5.1, 6.0]
vetor3 = [5.0, 4.5, 3.5, 7.0]

const mediaAritmetica = vetor => {
    let soma = 0
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }
    media = soma / vetor.length

    if (media >= 7) {
        return `Aluno Aprovado. \nMédia Final = ${media}`
    } else if (media >= 5) {
        return `Aluno está de Recuperação. \nMédia Final = ${media}`
    } else {
        return `Aluno Reprovado. \nMédiaFinal = ${media}`
    }
}

console.log(mediaAritmetica(vetor1))
console.log('---------------------')
console.log(mediaAritmetica(vetor2))
console.log('---------------------')
console.log(mediaAritmetica(vetor3))