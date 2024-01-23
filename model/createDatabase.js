import Mongoose from "mongoose";

const URL = "mongodb://localhost:27017";
const connectDb = () => {
  try {
    const db = Mongoose.connect(URL);
    console.log(`Mongodb connected`);
  } catch {
    console.log("Cant connect Mongodb");
  }
};

export default connectDb;
