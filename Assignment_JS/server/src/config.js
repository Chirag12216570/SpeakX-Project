const mongoose = require('mongoose');
require('dotenv').config();

const { MONGODB_URI, DB_NAME } = process.env;

if (!MONGODB_URI || !DB_NAME) {
    console.error('Environment variables not defined');
    process.exit(-1);
}

mongoose
    .connect(MONGODB_URI, { dbName: DB_NAME })
    .then(() => console.log('MongoDB is connected'))
    .catch(() => process.exit(1));

module.exports = mongoose;
