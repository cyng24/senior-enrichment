const Sequelize = require('sequelize');
const db = require('../index');
const Campus = require('./campus');

module.exports = db.define('student', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    defaultScope: {
      include: [
        { model: Campus }
      ]
    }
  });