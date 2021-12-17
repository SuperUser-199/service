const mongoose = require('mongoose');

const connectDB = async () => {
    const res = await mongoose.connect(process.env.LOCAL_DB);
    console.log(`Database connected successfully to ${res.connection.host}`);
}

module.exports = connectDB;