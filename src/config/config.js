// Copyright (c) 2022 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

require('dotenv').config();

module.exports = config = {
	PROTOCOL: process.env.PROTOCOL || 'http',
	HOST: process.env.HOST || 'localhost',
	PORT: process.env.PORT || 3000,
	API_URL: process.env.API_URL || '/api/v1',
	DB_CONNECTION_STRING:
		process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/messages',
	DB_NAME: process.env.DB_NAME || 'db_messages',
};
