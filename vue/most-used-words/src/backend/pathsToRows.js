// Vai receber a lista dos caminhos (paths) e vai retornar todas as linhas que estão dentro dos arquivos (dentro das legendas), por exemplo:
// vai pegar 10 arquivos e vai juntá-los em um grande texto, nesse texto será feito um .split gerando um array com cada uma das linhas dos arquivos

const fs = require('fs')

module.exports = paths => {
    return new Promise((resolver, reject) => {
        try {
            const rows = paths
                .map(path => fs.readFileSync(path).toString('utf-8'))
                .reduce((fullText, fileText) => `${fullText}\n${fileText}`)
                .split('\n')
            resolver(rows)
        } catch (e) {
            reject(e)
        }
    })
}