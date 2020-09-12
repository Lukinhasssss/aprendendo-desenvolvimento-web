const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')
// require('./api/produto')(app, 'com param!')
const produtoApi = require('./api/produto')
produtoApi(app, 'com param!')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(bodyParser.text()) // Significa que qualquer texto que chegar no corpo da requisicao sera interpretado
app.use(bodyParser.json()) // Significa que qualquer json que chegar no corpo da requisicao sera interpretado

app.use(saudacao('Meliodas'))

app.use('/opa', (req, resp, next) => { // Função Middleware
    console.log('Antes...')
    next() // Chama a próxima 'cadeia de comandos' --> Padrão Chain of the responsability
})

app.get('/clientes/relatorio', (req, resp) => { // Essa função fica em cima da função abaixo pois essa função é mais específica
    resp.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, resp) => {
    // let corpo = ''
    // req.on('data', function(parte) {
    //     corpo += parte
    // })

    // req.on('end', function() {
    //     resp.send(corpo)
    // })

    // Agora utilizando o bodyParser:
    resp.send(req.body)
})

app.get('/clientes/:id', (req, resp) => {
    resp.send(`Cliente ${req.params.id} selecionado!`)
})

app.get('/opa', (req, resp, next) => { // use serve tanto para get tanto para post, put, delete...
    console.log('Durante...')
    // resp.send('<h1>Estou bem!</h1></br></br><h2>Tipo é HTML!</h2>')

    // resp.json({
    //     name: 'RX 580 8GB',
    //     price: 654.90,
    //     discount: 0.12
    // })

    // resp.json([
    //     { id: 7, name: 'Ana', position: 1 },
    //     { id: 34, name: 'Bia', position: 2 },
    //     { id: 73, name: 'Carlos', position: 3 }
    // ])

    resp.json({
        data: [
            { id: 7, name: 'Ana', position: 1 },
            { id: 34, name: 'Bia', position: 2 },
            { id: 73, name: 'Carlos', position: 3 }
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })

    next()
})

app.use('/opa', (req, resp) => { // Função Middleware
    console.log('Depois...')
})

app.listen(3000, () => {
    console.log('Backend executando...')
})