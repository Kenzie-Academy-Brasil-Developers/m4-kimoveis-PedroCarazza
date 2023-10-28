import { Router } from "express";
import { validadeBody, verifyAdmin, verifyPermissions, verifyToken } from "../middlewares/globals.middleware";
import { verifyUniqueUserEmail, verifyUserExists } from "../middlewares/users.middleware";
import { createUserSchema, updateUserSchema } from "../schemas/users.schema";
import { createUserController, deleteUserController, readAllUsersController, updateUserController } from "../controllers/users.controller";

export const userRouter: Router = Router();

userRouter.post('/', validadeBody(createUserSchema), verifyUniqueUserEmail, createUserController);
userRouter.get('/', verifyToken, verifyAdmin, readAllUsersController);
userRouter.patch('/:id', validadeBody(updateUserSchema), verifyToken, verifyUserExists, verifyPermissions, updateUserController);
userRouter.delete('/:id', verifyToken, verifyUserExists, verifyPermissions, deleteUserController);
