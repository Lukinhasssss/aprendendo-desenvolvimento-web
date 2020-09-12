/* Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
 * aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
 * aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
 * "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo. */


// Resolvendo o exercício utilizando array
const mediaFinal = (codigoDoAluno, nota1, nota2, nota3) => {
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a, b) => a < b ? 1: -1)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10
    return `Código do Aluno: ${codigoDoAluno}\nNotas: ${nota1}, ${nota2}, ${nota3}\nMédia Final: ${mediaFinal}\nAluno ${mediaFinal < 5 ? 'Reprovado' : 'Aprovado'}`
}

console.log(mediaFinal(073, 6, 8, 3))
console.log('----------------------')
console.log(mediaFinal(092, 2, 2, 9))
console.log("\n")

// Utilizando o if mas sem atribuir o peso 4 para a maior nota
const mediaFinal2 = (codigoDoAluno, nota1, nota2, nota3) => {
    
    let mediaFinal = (nota1 * 4 + nota2 * 3 + nota3 * 3) / 10
    
    return `Código do Aluno: ${codigoDoAluno}\nNotas: ${nota1}, ${nota2}, ${nota3}\nMédia Final: ${mediaFinal}\nAluno ${mediaFinal < 5 ? 'Reprovado' : 'Aprovado'}`
}

console.log(mediaFinal2(001, 2, 2, 9))