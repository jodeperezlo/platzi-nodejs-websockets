// Copyright (c) 2022 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	user: {
		type: String,
		required: true,
	},
});

exports.Users = mongoose.model('users', userSchema, 'users');
