import { Router } from "express";
import { validadeBody, verifyAdmin, verifyToken } from "../middlewares/globals.middleware";
import { verifyCategoryExists, verifyUniqueCategoryName } from "../middlewares/categories.middleware";
import { createCategorySchema } from "../schemas/categories.schema";
import { createCategoryController, readCategoriesController, readRealEstateByCategoryController } from "../controllers/categories.controller";

export const categoryRouter: Router = Router();

categoryRouter.post('/', validadeBody(createCategorySchema), verifyToken, verifyUniqueCategoryName, verifyAdmin, createCategoryController);
categoryRouter.get('/', readCategoriesController);
categoryRouter.get('/:id/realEstate', verifyCategoryExists, readRealEstateByCategoryController);
