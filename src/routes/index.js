// Copyright (c) 2022 Jorge de Jesus Perez Lopez
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// Copyright (c) 2022 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const express = require('express');

const message = require('../components/messages/routes');

const routes = (server) => {
	server.use('/messages', message);
};

module.exports = routes;
