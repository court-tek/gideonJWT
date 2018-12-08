const Sequelize = require('sequelize');
const UserModel = require('./models/user');
const keys = require('./config/keys');

// Connect to Database
const sequelize = new Sequelize(keys.database, keys.username, keys.password, {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false
});

// imported models
const Hello = UserModel(sequelize, Sequelize);

sequelize.sync()
.then(() => {
  console.log('Database Initiated');
});

module.exports = Hello;
