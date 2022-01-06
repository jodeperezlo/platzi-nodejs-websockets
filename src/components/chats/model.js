// Copyright (c) 2022 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema({
	users: [
		{
			type: Schema.ObjectId,
			ref: 'users',
			required: true,
		},
	],
});

exports.Chats = mongoose.model('chats', chatSchema, 'chats');
