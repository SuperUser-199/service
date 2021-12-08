const express = require('express');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

const app = express();

// error Middleware
const errorMiddlerware = require('./middlewares/error');

app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());

// setting up routes
const user = require('./routes/userRoute');
const service = require('./routes/serviceRoutes');

app.use('/api/v1/user', user);
app.use('/api/v1/service', service);

app.use(errorMiddlerware);

module.exports = app;