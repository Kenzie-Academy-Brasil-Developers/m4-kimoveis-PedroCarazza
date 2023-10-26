import { Router } from "express";
import {
  validadeBody,
  verifyAdmin,
  verifyToken,
} from "../middlewares/globals.middleware";
import { verifyAddressExists } from "../middlewares/realEstates.middleware";

export const realEstatesRouter: Router = Router();

realEstatesRouter.post(
  '/',
  verifyToken,
  verifyAdmin,
  validadeBody,
  verifyAddressExists
);
realEstatesRouter.get('/');
