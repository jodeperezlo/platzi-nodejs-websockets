// Copyright (c) 2022 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
	chat: { type: Schema.Types.ObjectId, ref: 'Chats', required: true },
	user: {
		type: Schema.ObjectId,
		ref: 'users',
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
	file: {
		type: String,
		default: '',
	},
});

exports.Messages = mongoose.model('messages', messageSchema, 'messages');
