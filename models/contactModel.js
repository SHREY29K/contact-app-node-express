//Mongoose is used to communicate with MongoDB, it's a library in JS itself.
//at every beginining of the file, the required entity is added.
const mongoose = require('mongoose');

//here we have to decide a schema to help to contact MongoDB with thehelp of mongoose and that is done using functions, such as given below:
const contactSchema = mongoose.Schema({
  name:{
    //contact name is added
    type: String,
    required: [true,"Please Add the contact name"],
  },
  email:{
    //email is added
    type: String,
    required: [true,"Please Add the email address"],
  },
  phone:{
    //Here, the phone number is added.
    type: String,
    required: [true,"Please Add the contact phone number"],
  },
  },
  {
    timestamps: true, //This is the library which automatically initializes the timestamp for the required field .
  }
);

//AT last the module is exported.
module.exports = mongoose.model("Contact",contactSchema);