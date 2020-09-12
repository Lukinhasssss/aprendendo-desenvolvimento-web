const config = require('../knexfile')
const knex =require('knex')(config) // Instancia o knex passando o arquivo de configuração para ele

knex.migrate.latest([config])
module.exports = knex