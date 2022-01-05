// Copyright (c) 2022 Jorge de Jesus Perez Lopez
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

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
		const messageList = await controller.getMessages();
		response.succes(req, res, 200, messageList);
	} catch (error) {
		response.error(req, res, 500, 'Internal server error', error);
	}
});

router.post('/', async (req, res) => {
	try {
		const message = req.body.message;
		const user = req.body.user;
		const fullMessage = await controller.addMessage(user, message);
		if (fullMessage) {
			response.succes(req, res, 201, { fullMessage, message: 'Message sent' });
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
		response.error(req, res, 500, 'Server error', 'Error in addMessage');
	}
});

module.exports = router;
