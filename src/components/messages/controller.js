// Copyright (c) 2022 Jorge de Jesus Perez Lopez
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// Copyright (c) 2022 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const store = require('./store');

const addMessage = (user, message) => {
	if (user && message) {
		try {
			const fullMessage = {
				user: user,
				message: message,
				date: new Date(),
			};
			store.add(fullMessage);
			return fullMessage;
		} catch (error) {
			throw error;
		}
	} else {
		return false;
	}
};

const getMessages = async () => {
	try {
		const messagesList = await store.list();
		return messagesList;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	addMessage,
	getMessages,
};
