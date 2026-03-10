import express from "express";
import { showUsers, createUser, updateUser, deleteUser } from "../controllers/userController.js";

const userRouter = express.Router();

// GET /users - Show all users
userRouter.get("/", showUsers);

// POST /users - Create a new user
userRouter.post("/", createUser);

// PUT /users/:id - Update a user by ID
userRouter.put("/:id", updateUser);

// DELETE /users/:id - Delete a user by ID
userRouter.delete("/:id", deleteUser);

export { userRouter };