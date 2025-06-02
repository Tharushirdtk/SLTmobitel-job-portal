
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('YOUR_MONGODB_CONNECTION_STRING_HERE', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB Connected');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
