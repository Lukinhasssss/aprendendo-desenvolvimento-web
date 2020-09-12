const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// Lendo o arquivo de forma síncrona...
const conteudo = fs.readFileSync(caminho, 'utf-8') // readFileSync --> Ler arquivo de forma síncrona
console.log(conteudo)
console.log('---------------------')

// Lendo o arquivo de forma assíncrona...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})
const config = require('./arquivo.json')
console.log(config.db)
console.log('---------------------')

// Lendo uma pasta...
fs.readdir(__dirname, (err, arquivos) => { // __dirname --> Diretório atual, que no caso é a pasta 'node'
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})