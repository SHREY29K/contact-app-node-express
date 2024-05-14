const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config(); 

connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());//This would help us to parse the data coming from the user.(It's a middle ware)
app.use("/api/contacts", require("./routes/contactRoutes"));

//In this we're going to register the user, and the user would have it's own controller of the contacts
app.use("/api/users", require("./routes/userRoutes"));

//whenever we use a middleware we create a .use() function
app.use(errorHandler);

app.listen(port,()=>{
  console.log(`Server running on port ${port}`);
});