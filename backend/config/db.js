const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://sivaram:sivaram@cluster0.0u7y0h0.mongodb.net/textalot?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      /* useFindAndModify: true, */
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;