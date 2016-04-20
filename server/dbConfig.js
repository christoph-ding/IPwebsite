// Define database connection
var Sequelize = require('sequelize');

// Connection
var connection = new Sequelize('ipAddress', null, null, {
  dialect: 'postgres',
  port: 5432
})

// Connect
connection
  .authenticate()
  .then(function () {
    console.log('you are now connected to IP Address')
  })
  .catch(function (err) {
    console.log("something went wrong connecting to IP Address")
  })

// Ip Addresses
var User = connection.define('User', {
  email: Sequelize.STRING,
  IPAddress: Sequelize.STRING,
  Place: Sequelize.STRING
  },
  {
    tableName: 'Users'
  });

// Create tables
User.sync();
