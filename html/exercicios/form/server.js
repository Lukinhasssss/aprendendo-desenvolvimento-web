// npm init -y para criar o arquivo package.json
// As dependências necessárias serão o express e o body-parser
// Para instalar o express: npm i --save express@4.16.3
// Para instalar o body-parser: npm i --save body-parser@1.18.2 -E
// Para instalar express e body-parser ao mesmo tempo: npm i --save express@4.16.3 body-parser@1.18.2 -E | Obs: o -E significa que vai instalar a versão exata

/* body-parser ==> uma vez que eu submeto os dados no meu formulário o body-parser vai fazer um parser no corpo da requisição (no corpo do request),
vai pegar esses dados e jogar dentro do request.body, ou seja, quando eu acessar request.body eu vou ter acesso a todos os dados do formulário que eu submeti */

const express = require('express') // importa o express
const app = express() // instancia o express e o associa a variável app
const bodyParser = require('body-parser') // importa o body-parser

app.use(bodyParser.urlencoded({ extended: true }))

// Agora vai ser preciso atender as urls
app.post('/usuarios', (request, response) => {
    console.log(request.body)
    console.log(request.query) // OBS: Em requisições do tipo GET os dados não vem no body e sim no query
    response.send('<h1>Parabéns. Usuário Incluido!!!</h1>')
})

app.post('/usuarios/:id', (request, response) => {
    console.log(request.params.id)
    console.log(request.body)
    response.send('<h1>Parabéns. Usuário Alterado!!!</h1>')
})

app.listen(3003)

// OBS: Em formulários é sempre melhor utilizar o método POST