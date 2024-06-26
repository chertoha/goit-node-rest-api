import express from "express";
import contactsRouter from "./contactsRouter.js";
import authRouter from "./authRouter.js";
import userRouter from "./usersRouter.js";

const router = express.Router();

router.use("/users", authRouter);
router.use("/users", userRouter);
router.use("/contacts", contactsRouter);

export default router;
