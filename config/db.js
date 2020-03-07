const mongoose = require('mongoose');
require('colors');

const connectDB = async () => {

  try {
    
    await mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useFindAndModify: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  
    console.log('MongoDB is here'.blue.bold);

  } catch (err) {
    console.log(`${err.message}`.red.bold);
  }

}

module.exports = connectDB;