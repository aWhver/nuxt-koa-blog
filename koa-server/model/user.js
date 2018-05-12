/**
 * Created by juntong on 2018/5/12.
 */
const Sequelize = require('sequelize')
const sequelize = require('../mysql')
const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  user: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

User.sync({force: true}) // force为true 如果该表已创建，先删除此表再创建

module.exports = User
