// Copyright (c) 2022 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const express = require('express');
const cors = require('cors');

const router = require('./routes');
const config = require('./config/config');

const app = express();
const server = require('http').Server(app);

const db = require('./db');

db.connect();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const socket = require('./socket/socket.js');

socket.connect(server);

router(app);

app.use('/static', express.static(__dirname + '/public'));

const api = config.API_URL;

app.get(`${api}`, (req, res) => {
	res.send(
		`<h1>Bienvenido</h1> <p>Access to: <b>${api}/api-docs</b> for more information.</p>`
	);
});

server.listen(config.PORT, () => {
	console.log(
		`Server is running on ${config.PROTOCOL}://${config.HOST}:${config.PORT}${api}`
	);
});
