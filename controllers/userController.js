import userModel from "../models/userModel.js";

const showUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.render("users/index", { users });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new userModel({ username, email, password });
    await newUser.save();
    res.redirect("/users");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, password } = req.body;
    await userModel.findByIdAndUpdate(id, { username, email, password });
    res.redirect("/users");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await userModel.findByIdAndDelete(id);
    res.redirect("/users");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export { showUsers, createUser, updateUser, deleteUser };