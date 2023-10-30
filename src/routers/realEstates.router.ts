import { Router } from "express";
import {
  validadeBody,
  verifyAdmin,
  verifyToken,
} from "../middlewares/globals.middleware";
import { verifyAddressExists } from "../middlewares/realEstates.middleware";
import { createRealEstateController, readRealEstatesController } from "../controllers/realEstate.controller";
import { createRealEstateSchema } from "../schemas/realEstates.schemas";

export const realEstatesRouter: Router = Router();

realEstatesRouter.post(
  '/',
  verifyToken,
  verifyAdmin,
  validadeBody(createRealEstateSchema),
  verifyAddressExists,
  createRealEstateController
);
realEstatesRouter.get('/', readRealEstatesController);
