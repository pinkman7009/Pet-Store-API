const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
  });

  console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
