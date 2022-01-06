// Copyright (c) 2022 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
const { Chats } = require('./model');

const addChat = (chat) => {
	const myChat = new Chats(chat);
	myChat.save();
};

const getChats = async (filterChat) => {
	try {
		let filter;
		if (filterChat !== null) filter = { user: filterChat };
		const chatsList = await Chats.find(filter).populate('users');
		return chatsList;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	add: addChat,
	list: getChats,
};
