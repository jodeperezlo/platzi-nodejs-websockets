// Copyright (c) 2022 Jorge de Jesus Perez Lopez
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// Copyright (c) 2022 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
	user: {
		type: String,
		required: true,
	},
	message: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

exports.Messages = mongoose.model('messages', messageSchema, 'messages');
