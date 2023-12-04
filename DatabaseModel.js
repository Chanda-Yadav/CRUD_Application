import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
  },
 email:{
type: String,
 },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export  default  mongoose.model("user", userSchema,"user");


