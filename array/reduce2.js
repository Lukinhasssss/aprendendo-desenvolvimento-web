const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsistas ?
const resultadoDoDesafio1 = alunos.map(a => a.bolsista).reduce(function(resultado, bolsista) {
    return resultado && bolsista // return 'resultado && bolsista ?'
})

console.log('Resultado do Desafio 1: Todos os alunos são bolsistas? ' + resultadoDoDesafio1) // RESOLUÇÃO DO MEU JEITO


// Desafio 2: Algum aluno é bolsista ?
const resultadoDoDesafio2 = alunos.map(a => a.bolsista).reduce(function(resultado, bolsista) {
    return resultado || bolsista
})
console.log('Resultado do Desafio 2: Algum aluno é bolsista? ' + resultadoDoDesafio2) // RESOLUÇÃO DO MEU JEITO

console.log('-----------------------------------------------------------------')


//RESULUÇÕES DO JEITO DO PROFESSOR

// Desafio 1:
const todosBolsistas = (resultado, bolsista) => resultado && bolsista // Arrow function com retorno implicito
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//Desafio 2:
const algumBolsista = (resultado, bolsista) => {
    return resultado || bolsista
}
console.log('Resultado do Desafio 2: Algum aluno é bolsista? ' + alunos.map(a => a.bolsista).reduce(algumBolsista))