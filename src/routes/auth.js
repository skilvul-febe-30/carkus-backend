import { Router } from "express";
import { login, register } from "../controllers/auth.js";

export const auth = Router();

auth.post("/login", login);
auth.post("/register", register);
