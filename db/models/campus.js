const Sequelize = require('sequelize');
const db = require('../index');

module.exports = db.define('campus', {
  name: Sequelize.STRING,
  image: Sequelize.STRING
});