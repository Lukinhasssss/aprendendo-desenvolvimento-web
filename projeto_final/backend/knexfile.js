// Update with your config settings.
const { db } = require('./.env')

module.exports = {
  client: 'postgresql',

  // connection: {
  //   database: 'knowledge',
  //   user: 'postgres',
  //   password: '1950858'
  // },
  connection: db,

  pool: {
    min: 2,
    max: 10
  },

  migrations: {
    tableName: 'knex_migrations'
  }
};
