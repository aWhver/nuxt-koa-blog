/**
 * Created by juntong on 2018/5/12.
 */
const Sequelize = require('sequelize')
const config = require('../config')

const sequelize = new Sequelize(config.database.DATABASE, config.database.USERNAME, config.database.PASSWORD, {
  host: config.database.HOST,
  port: config.database.PORT,
  dialect: 'mysql',
})

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.')
}).catch(err => {
  console.error('Unable to connect to the database:', err)
})

module.exports = sequelize