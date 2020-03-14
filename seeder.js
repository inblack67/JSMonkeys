const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
require('colors');

dotenv.config({ path: './config/config.env' });

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

const deleteData = async () => {
  await User.deleteMany();
  console.log(`Data Destroyed`.red.inverse);
  process.exit();
}

if(process.argv[2] === '-d')
{
  deleteData();
}

connectDB();

