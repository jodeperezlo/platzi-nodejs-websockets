// Copyright (c) 2022 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const socketIO = require('socket.io');

const socket = {};

const connect = (server) => {
	socket.io = socketIO(server);
};

module.exports = {
	connect,
	socket,
};
