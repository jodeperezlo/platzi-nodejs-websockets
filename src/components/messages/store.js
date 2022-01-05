// Copyright (c) 2022 Jorge de Jesus Perez Lopez
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// Copyright (c) 2022 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const db = require('mongoose');
const { Messages } = require('./model');

const connectionString =
	'mongodb+srv://SuperAdmin:admin@cluster0.u19en.mongodb.net/telegram?retryWrites=true&w=majority';

// Connection to Database
db.connect(connectionString, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	dbName: 'telegram',
})
	.then(() => {
		console.log('[db] Database connection is ready...');
	})
	.catch((err) => {
		console.log('Error: ' + err);
	});

const addMessage = (message) => {
	const myMessage = new Messages(message);
	myMessage.save();
};

const getMessages = async () => {
	try{
		const messagesList = await Messages.find();
		return messagesList;
	}catch(error){
		throw error;
	}
};

module.exports = {
	add: addMessage,
	list: getMessages,
};
