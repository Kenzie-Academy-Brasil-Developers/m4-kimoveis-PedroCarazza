import { Router } from "express";
import { validadeBody, verifyAdmin, verifyPermissions, verifyToken } from "../middlewares/globals.middleware";
import { verifyUniqueUserEmail, verifyUserExists } from "../middlewares/users.middleware";

export const userRouter: Router = Router();

userRouter.post('/', validadeBody, verifyUniqueUserEmail);
userRouter.get('/', verifyToken, verifyAdmin);
userRouter.patch('/:id', validadeBody, verifyToken, verifyUserExists, verifyPermissions);
userRouter.delete('/:id', verifyToken, verifyUserExists, verifyPermissions, verifyAdmin);
