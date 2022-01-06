// Copyright (c) 2022 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const db = require('mongoose');
const config = require('./config/config');

const connectionString = config.DB_CONNECTION_STRING;

// Connection to Database
const connect = async () => {
	try {
		await db.connect(connectionString, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			dbName: config.DB_NAME,
		});
		console.log(`[db] Database connection is ready in ${config.DB_NAME}...`);
	} catch (err) {
		console.log('Error: ' + err);
	}
};

exports.connect = connect;
