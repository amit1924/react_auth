import express from "express";
import connectDb from "./model/createDatabase.js";
import userModel from "./model/CreateSchema.js";
import cors from "cors";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.create({ email: email, password: password });
    console.log(`Registration successful ${user.email} ${user.password}`);
    res.status(201).json({ message: "Registration successful", user });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Registration failed" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email: email });
    if (user.password === password) {
      console.log(`Password Matched  ${user.password}`);
      res.status(201).json({ message: "Login successful", user });
    } else {
      console.log("Password doesnt match");
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Login failed" });
  }
});

connectDb();

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
