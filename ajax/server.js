// Esse arquivo vai ser responsável tanto pra pover os dados estáticos como também para ter alguns servicós que nós iremos precisar ma hora de
// submeter formulário e coisas do tipo
const bodyParser = require('body-parser') // Responsável por fazer o parser do body da requisição
const express = require('express')
const app = express()

/* Definindo middlewares que vão ser aplicados sempre que acontecer uma requisição
        OBS: middleware --> Função que vai ser executada quando uma determinada requisição chegar.
                            Pode ser aplicado a algum padrão de url ou pode ser aplicado para todas as requisições que chegarem no servidor. */
app.use(express.static('.')) // Dentro da pasta atual, no qual o server.js está, sirva os arquivos estáticos, ou seja, todos os arquivos
app.use(bodyParser.urlencoded({ extended: true })) // Se vier algum formato de submit de formulario esse código será responsável por ler e transformar em obj
app.use(bodyParser.json()) // Se vier um JSON dentro do body da requisição esse é o código que será aplicado para transformar JSON em objeto

const multer = require('multer') // Interpreta o form que veio o arquivo do upload

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload') // O segundo parâmetro é a pasta de destino que eu quero que fique armazenado o arquivo. | OBS: Foi escolhida a pasta atual
    },
    filename: function (req, file, callback) { //Função que será chamada no momento em que for escolher o nome do arquivo
        callback(null, `${Date.now()}_${file.originalname}`) // No 2ª param eu passo qual é o nome do arquivo padrão que eu quero que ele use para formar o nome do arquivo
        // Neste caso eu quero que ele use o nome original, só que ante do nome original eu quero que ele coloque Date.now()
        // Date.now() --> Pega a data atual para que eu sempre tenha arquivos com nomes diferentes
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (request, response) => { // O upload vai ser via método POST
	upload(request, response, error => { // No momento que o upload for concluído chamará essa função
		if (error) {
			return response.end('Ocorreu um erro.')
		}

		response.end('Concluído com sucesso.') // Chama essa linha caso o error esteja vazio
	})
})

app.post('/formulario', (request, response) => {
    response.send({
        ...request.body, // Tudo que vier na resposta eu vou jogar nesse novo objeto que eu estou devolvendo como resosta pro front-end e...
        id: 1 // Vou adicionar um id, como se eu tivesse inserido um dado no banco de dados
    })
})

app.get('/parOuImpar', (request, response) => { // Essa função vai receber como parâmetro um número e em cima desse número eu vou calcular se o número é par ou ímpar
    //OBS!!! Dentro do express existem algumas formas de você receber dados lá do seu front-end:
        // request.body
        // request.query
        // request.params
    const par = parseInt(request.query.numero) % 2 === 0
    response.send({
        resultado: par ? 'par' : 'impar' // Se for par retorne par caso contrario retorne impar
    })
})

//app.get('/teste', (require, response) => response.send(new Date)) // Quando vier uma requisição do tipo get na url '/teste' chame essa função
app.listen(8080, () => console.log('Executando...')) // Executa o server na porta 8080

// Caso o servidor já esteja sendo usado você pode trocar a porta ou ver quais processos estão sendo usados utilizando o comando 'tasklist' no terminal