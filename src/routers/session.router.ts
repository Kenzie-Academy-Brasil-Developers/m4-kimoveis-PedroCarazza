import { Router } from "express";
import { loginController } from "../controllers/session.controller";
import { validadeBody } from "../middlewares/globals.middleware";
import { userLoginSchema } from "../schemas/users.schema";

export const sessionRouter: Router = Router();

sessionRouter.post('/', validadeBody(userLoginSchema), loginController);