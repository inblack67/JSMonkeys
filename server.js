const express = require('express');
const dotenv = require('dotenv');
const errorHandler = require('./middlewares/error');
require('colors');

// env vars
dotenv.config({ path: './config/config.env' });

const app = express();

// db
const connectDB = require('./config/db');
connectDB();

// load routes
const users = require('./routes/users');

// bodyparser
app.use(express.json());

// use routes
app.use('/api/users', users);

// errorHandler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`.green.bold);
});


