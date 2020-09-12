// Com promise...
const http = require('http')
const { promises } = require('dns') // Essa linha de código aparece altomaticamente então pode ser ignorada

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, resposta => {
            let resultado = ''

            resposta.on('data', dados => { // Cada um dos dados que for chegando vai ser concatenado na variável resultado
                resultado += dados
            })

            resposta.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })
}

// Recurso do ES8 e tem o objetivo de simplificar o uso de promises...
// A PRIMEIRA COISA A SE FAZER É CRIAR UMA FUNÇÃO E MARCAR ESSA FUNÇÃO COM A PALAVRA 'async'. A PALAVRA 'await' SÓ VAI FUNCIONAR DENTRO DE UMA FUNÇÃO COM A PALAVRA 'async'
let obterAlunos = async() => {
        const turmaA = await getTurma('A')
        const turmaB = await getTurma('B')
        const turmaC = await getTurma('C')
        return [].concat(turmaA, turmaB, turmaC)
    } // Retorna um objeto 'AsyncFunction'

obterAlunos()
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))