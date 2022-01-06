// Copyright (c) 2022 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { Users } = require('./model');

const addUser = (user) => {
	const myUser = new Users(user);
	myUser.save();
};

const getUsers = async (filterUser) => {
	try {
		const usersList = await Users.find(filterUser);
		return usersList;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	add: addUser,
	list: getUsers,
};
