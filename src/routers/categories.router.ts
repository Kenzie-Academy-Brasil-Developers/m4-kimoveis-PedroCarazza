import { Router } from "express";
import { verifyAdmin, verifyToken } from "../middlewares/globals.middleware";
import { verifyCategoryExists, verifyUniqueCategoryName } from "../middlewares/categories.middleware";

export const categoryRouter: Router = Router();

categoryRouter.post('/', verifyToken, verifyUniqueCategoryName, verifyAdmin);
categoryRouter.get('/');
categoryRouter.get('/:id/realEstate', verifyCategoryExists);
