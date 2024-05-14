const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

//@desc Register the user
//@route POST /api/user/register
//@access public
const registerUser = asyncHandler(async (req,res)=>{
  const {username,email,password} = req.body;
  //to fill all the details that are necessary for the user
  if (!username || !email || !password){
    res.status(404);
    throw new Error("All the fields are mandatory");
  }
  const userAvailable = await User.findOne({email});
  //if user is already available then throw the error
  if (userAvailable){
    res.status(400);
    throw new Error("User already registered!!!");
  }
  
  //Hash Password
  const hashedPassword = await bcrypt.hash(password,10);
  console.log("Hashed Password: ",hashedPassword);
  const user = User.create({
    username,
    email,
    password: hashedPassword,
  });

  console.log(`User created ${user}`);
  if(user){
    res.status(201).json({_id: user.id, email: user.email});
  }else{
    res.status(404);
    throw new Error("User data is not valid");
  }
  res.json({message:"Register the User"});
});

//@desc Login the user
//@route POST /api/user/login
//@access public
const loginUser = asyncHandler(async (req,res)=>{
  res.json({message:"Login User"});
});

//@desc Current user Info
//@route POST /api/user/current
//@access private
const currentUser = asyncHandler(async (req,res)=>{
  res.json({message:"Current User Information:"});
});

module.exports = {registerUser,loginUser,currentUser};