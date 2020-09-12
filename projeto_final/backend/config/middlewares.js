const bodyParser = require('body-parser')
const cors = require('cors')
// Vai ajudar a fazer as depenDências dentro da minha aplicação

module.exports = app => {
    app.use(bodyParser.json())
    app.use(cors())
}