// Copyright (c) 2022 Jorge de Jesus Perez Lopez
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// Copyright (c) 2022 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

exports.succes = (req, res, status, message) => {
	res.status(status || 200).json({
		status: 'success',
		body: message,
	});
};
exports.error = (req, res, status, message, details) => {
	console.error(`[response error] ${details || message}`);
	res.status(status || 500).json({
		status: 'error',
		body: message,
	});
};
