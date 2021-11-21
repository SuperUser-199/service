const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// error Middleware
const errorMiddlerware = require('./middlewares/error');

app.use(express.json());
app.use(cookieParser());

// setting up routes
const user = require('./routes/userRoute');

app.use('/api/v1/user', user);

app.use(errorMiddlerware);

module.exports = app;