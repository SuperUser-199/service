require('dotenv').config({ path: 'backend/config/config.env' });
const app = require('./app');
const connectDB = require('./config/database');

// connect database
connectDB();

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})