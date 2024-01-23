import Mongoose from "mongoose";

const userSchema = new Mongoose.Schema({
  email: String,
  password: String,
});

const userModel = Mongoose.model("User", userSchema);

export default userModel;
