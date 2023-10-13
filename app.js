const express = require('express');
const userRoutes = require('./routes/user.routes');
const body_parser = require('body-parser')

const app = express();

app.use(body_parser.json());

app.use('/',userRoutes);

module.exports = app;