const fs = require('fs')

const produto = {
    nome: 'Xiaomi MI 9T',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => { // __dirname + "O arquivo que eu quero gerar".   JSON.stringify --> Converte o objeto para o formato JSON
    console.log(err || 'Arquivo Salvo!') // Se 'err' for nulo vai resolver pra falso e se isso acontecer vai ser imprido 'Arquivo Salvo!'.
})