const express = require('express');
const dotenv = require('dotenv');
require('colors');

// env vars
dotenv.config({ path: './config/config.env' });

const app = express();

// db
const connectDB = require('./config/db');
connectDB();

// bodyparser
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`.green.bold);
});


