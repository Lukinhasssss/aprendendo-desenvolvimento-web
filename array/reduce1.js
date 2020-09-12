const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

console.log(alunos.map(a => a.nota)) // extrai somente as notas do array alunos
console.log('---------------------------')

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, valorAtual) {
        console.log(acumulador, valorAtual)
        return acumulador + valorAtual // Soma a nota de todos os alunos
    }, 0) // Para setar o valorInicial como 0

console.log(resultado)