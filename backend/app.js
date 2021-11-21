const express = require('express');
const app = express();

app.use(express.json());

// setting up routes
const user = require('./routes/userRoute');

app.use('/api/v1/user', user);

module.exports = app;