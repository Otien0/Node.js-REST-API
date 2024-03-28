const mongoose = require("mongoose");
const dotenv = require('dotenv');
require('colors');

dotenv.config();

mongoose.set('strictQuery', true);

const dbUrl = process.env.DB_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log('MongoDB Database Connection Successful'.green);
    } catch (error) {
        console.error('MongoDB Connection Error'.red, error);
        process.exit(1); // Exit process with failure
    }
}

module.exports = connectDB;
