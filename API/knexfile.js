module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'chiro_website_v2'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

};
