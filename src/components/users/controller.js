// Copyright (c) 2022 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const store = require('./store');

const addUser = (username) => {
	if (!username) {
		throw new Error('Username is required');
	} else if (username) {
		try {
			const user = {
				user: username,
			};

			store.add(user);
			return user;
		} catch (error) {
			throw error;
		}
	} else {
		return false;
	}
};

const getUsers = async (filterUser) => {
	try {
		const usersList = await store.list(filterUser);
		return usersList;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	addUser,
	getUsers,
};
