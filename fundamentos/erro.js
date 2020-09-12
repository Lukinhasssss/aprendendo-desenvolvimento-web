function tratarErroELançar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) { // A função recebe um objeto como parâmetro
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELançar(e) // Se ocorrer um erro no 'try' o 'catch' vai executar essa função (que foi criada lá em cima) e mesmo que de problema irá chamar o 'finally' de qualquer forma
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)