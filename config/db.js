var mysql = require('mysql')

var connection = mysql.createConnection({
	  host: 'localhost',
      user: 'root',
      password: '',
      database: 'express'
});

connection.connect(function(err) {
	  if (err) throw err
	  console.log('You are now connected...')
});

module.exports = connection;
