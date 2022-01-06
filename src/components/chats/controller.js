// Copyright (c) 2022 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const store = require('./store');

const addChat = (users) => {
	if (users && Array.isArray(users)) {
		try {
			const chat = {
				users,
			};
			store.add(chat);
			return chat;
		} catch (error) {
			throw error;
		}
	} else {
		return false;
	}
};

const getChats = async (filterChat) => {
	try {
		const chatsList = await store.list(filterChat);
		return chatsList;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	addChat,
	getChats,
};
