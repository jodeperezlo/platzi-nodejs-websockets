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
		const filterUser = req.query.user || null;

		const usersList = await controller.getUsers(filterUser);
		response.succes(req, res, 200, usersList);
	} catch (error) {
		response.error(
			req,
			res,
			500,
			'Internal server error',
			`Error in getUsers: ${error}`
		);
	}
});

router.post('/', (req, res) => {
	try {
		const { username } = req.body;
		const userAdded = controller.addUser(username);
		if (userAdded) {
			response.succes(req, res, 201, { userAdded, message: 'User added' });
		} else {
			response.error(
				req,
				res,
				400,
				'User not added. Bad request',
				'No username'
			);
		}
	} catch (error) {
		response.error(req, res, 500, 'Server error', `Error in addUser: ${error}`);
	}
});

module.exports = router;
