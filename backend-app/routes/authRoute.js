import express from "express";
import { register, login, logout } from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.get("/register", (req, res) => res.render("auth/register"));
authRouter.post("/register", register);

authRouter.get("/login", (req, res) => res.render("auth/login"));
authRouter.post("/login", login);

authRouter.post("/logout", logout);

export { authRouter };