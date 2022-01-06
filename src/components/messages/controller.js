// Copyright (c) 2022 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// Copyright (c) 2022 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const store = require('./store');
const { socket } = require('../../socket/socket');
const config = require('../../config/config');

const addMessage = (user, message, chat, file) => {
	if (user && message && chat) {
		try {
			let fileURL = '';
			if (file) {
				fileURL = `${config.PROTOCOL}://${config.HOST}:${config.PORT}/app/files/${file.filename}`;
			}
			const fullMessage = {
				chat,
				user: user,
				message: message,
				date: new Date(),
				file: fileURL,
			};
			store.add(fullMessage);

			socket.io.emit('message', fullMessage);
			return fullMessage;
		} catch (error) {
			throw error;
		}
	} else {
		return false;
	}
};

const getMessages = async (filterUser, filterChat) => {
	try {
		const messagesList = await store.list(filterUser, filterChat);
		return messagesList;
	} catch (error) {
		throw error;
	}
};

const updateMessage = async (id, message) => {
	if (id && message) {
		try {
			const messageUpdated = await store.update(id, message);
			return messageUpdated;
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
			const messageDeleted = await store.remove(id);
			return messageDeleted;
		} catch (error) {
			throw error;
		}
	} else {
		return false;
	}
};

module.exports = {
	addMessage,
	getMessages,
	updateMessage,
	deleteMessage,
};
