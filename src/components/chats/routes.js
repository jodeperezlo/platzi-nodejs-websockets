// Copyright (c) 2022 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const express = require('express');
const response = require('../../routes/response.routes');
const controller = require('./controller');

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const filterChat = req.query.user || null;

		const chatsList = await controller.getChats(filterChat);
		response.succes(req, res, 200, chatsList);
	} catch (error) {
		response.error(req, res, 500, 'Internal server error', error);
	}
});

router.post('/', async (req, res) => {
	try {
		const users = req.body.users;
		const chat = await controller.addChat(users);
		if (chat) {
			response.succes(req, res, 201, { chat });
		} else {
			response.error(
				req,
				res,
				400,
				'Message not sent. Bad request',
				'No user or message'
			);
		}
	} catch (error) {
		response.error(req, res, 500, 'Server error', `Error in addChat: ${error}`);
	}
});

module.exports = router;
