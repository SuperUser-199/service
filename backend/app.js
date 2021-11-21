const express = require('express');
const app = express();

// error Middleware
const errorMiddlerware = require('./middlewares/error');

app.use(express.json());

// setting up routes
const user = require('./routes/userRoute');

app.use('/api/v1/user', user);

app.use(errorMiddlerware);

module.exports = app;