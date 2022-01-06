// Copyright (c) 2022 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// Copyright (c) 2022 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { Messages } = require('./model');

const addMessage = (message) => {
	const myMessage = new Messages(message);
	myMessage.save();
};

const getMessages = async (filterUser, filterChat) => {
	try {
		let filterU, filterC;
		if (filterUser !== null) filterU = { user: filterUser };
		if (filterChat !== null) filterU = { chat: filterChat };
		const messagesList = await Messages.find(filterU, filterC).populate('user');
		return messagesList;
	} catch (error) {
		throw error;
	}
};

const updateText = async (id, message) => {
	if (id && message) {
		try {
			const foundMessage = await Messages.findOne({ _id: id });
			foundMessage.message = message;
			foundMessage.save();
			return foundMessage;
		} catch (error) {
			throw error;
		}
	} else {
		return false;
	}
};

const deleteMessage = async (id) => {
	if (id) {
		try {
			const messageDeleted = await Messages.deleteOne({ _id: id });
			return messageDeleted;
		} catch (error) {
			throw error;
		}
	} else {
		return false;
	}
};

module.exports = {
	add: addMessage,
	list: getMessages,
	update: updateText,
	remove: deleteMessage,
};
