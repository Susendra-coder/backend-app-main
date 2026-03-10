import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({ username, email, password: hashedPassword });
    await newUser.save();
    res.redirect("/auth/login");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
      req.session.userId = user._id;
      res.redirect("/");
    } else {
      res.status(401).send("Invalid credentials");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const logout = (req, res) => {
  req.session.destroy();
  res.redirect("/");
};

export { register, login, logout };