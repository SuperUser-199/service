const express = require('express');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const app = express();

// error Middleware
const errorMiddlerware = require('./middlewares/error');
// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "backend/config/config.env" });
}

app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload());
app.use(express.json());
app.use(cookieParser());

// setting up routes
const user = require('./routes/userRoute');

app.use('/api/v1', user);

app.use(errorMiddlerware);

module.exports = app;