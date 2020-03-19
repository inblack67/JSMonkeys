const express = require('express');
const dotenv = require('dotenv');
const errorHandler = require('./middlewares/error');
require('colors');
const sanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const cors = require('cors');

// env vars
dotenv.config({ path: './config/config.env' });

const app = express();

// db
const connectDB = require('./config/db');
connectDB();

// sanitize data
app.use(sanitize());

// set security headers
app.use(helmet());

// prevent XSS attacks
app.use(xss());

// rate limit
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,   // 10 minutes
  max: 100
});

app.use(limiter);

// prevent http param pollution
app.use(hpp());

// enable CORS
app.use(cors());

// load routes
const users = require('./routes/users');
const auth = require('./routes/auth');
const profile = require('./routes/profile');
const posts = require('./routes/posts');

// bodyparser
app.use(express.json());

// use routes
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

// errorHandler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`.green.bold);
});


