var db = require('../config/db');

exports.getAll = function(cb){
	db.query('SELECT * FROM person', function(err, rows, field) {
		db.end();
		if (!err){
			console.log('LOGGED: ', rows);
			cb(null,rows);
		}else{
			console.log('Error while performing Query.');
		}
	})
}
