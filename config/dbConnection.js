//This part of the moongoose whould look after the database; it is connected to our js file system or not.

//First htis type of database connection file is made.

const mongoose = require('mongoose');

//this displays the final output.
const connectDb = async() =>{
  try{
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
      "Database Connected: ",
      connect.connection.host,
      connect.connection.name
    );
  }catch(err){
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;