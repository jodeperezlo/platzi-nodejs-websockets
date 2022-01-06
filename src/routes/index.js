// Copyright (c) 2022 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// Copyright (c) 2022 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const config = require('../config/config');
const messages = require('../components/messages/routes');
const users = require('../components/users/routes');
const chats = require('../components/chats/routes');

const api = config.API_URL;

const routes = (server) => {
	server.use(`${api}/messages`, messages);
	server.use(`${api}/users`, users);
	server.use(`${api}/chats`, chats);
};

module.exports = routes;
