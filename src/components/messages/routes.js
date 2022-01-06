// Copyright (c) 2022 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// Copyright (c) 2022 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const express = require('express');
const multer = require('multer');

const response = require('../../routes/response.routes');
const controller = require('./controller');

const router = express.Router();

const upload = multer({
	dest: 'public/files/',
});

router.get('/', async (req, res) => {
	try {
		const filterMessages = req.query.user || null;
		const filterChat = req.query.chat || null;
		const messageList = await controller.getMessages(
			filterMessages,
			filterChat
		);
		response.succes(req, res, 200, messageList);
	} catch (error) {
		response.error(req, res, 500, 'Internal server error', error);
	}
});

router.post('/', upload.single('file'), async (req, res) => {
	try {
		const message = req.body.message;
		const user = req.body.user;
		const chat = req.body.chat;
		const file = req.file;
		const fullMessage = await controller.addMessage(user, message, chat, file);
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

router.patch('/:id', async (req, res) => {
	try {
		const data = await controller.updateMessage(
			req.params.id,
			req.body.message
		);
		if (data) {
			response.succes(req, res, 200, data);
		}
	} catch (error) {
		response.error(req, res, 500, 'Server error', 'Error in patch message');
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const data = await controller.deleteMessage(req.params.id);
		if (data) {
			response.succes(req, res, 200, data);
		}
	} catch (error) {
		response.error(req, res, 500, 'Server error', 'Error in delete message');
	}
});

module.exports = router;
