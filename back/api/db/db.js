const Sequelize = require('sequelize');

const db = new Sequelize("postgres://yourPostgresUser/the8agency", {
  logging: false,
});
module.exports = db;