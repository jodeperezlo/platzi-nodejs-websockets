// Copyright (c) 2022 Jorge de Jesus Perez Lopez
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const express = require('express');
const router = require('./routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router(app);

app.use('/app', express.static('public'));

app.listen(3000);

console.log('Server is running on http://localhost:3000');
