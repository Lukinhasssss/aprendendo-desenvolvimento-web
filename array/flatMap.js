const escola = [{ // const escola é um array de objetos
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

// O objetivo do exercício é extrair a nota de todos os alunos independente das turmas, ou seja, no final eu quero obter o array [8.1, 9.3, 8.9, 7.3]

const getNotaDoAluno = aluno => aluno.nota // EXTRAINDO NOTA DE ALUNO
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

// Utilizando o método .flatMap()
Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback)) // Transforma uma matriz em um único array
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)