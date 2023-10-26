import { Router } from "express";
import { validadeBody, verifyAdmin, verifyToken } from "../middlewares/globals.middleware";
import {
  verifyRealEstateExists,
  verifyRealEstateScheduleExists,
  verifyUserScheduleExists,
} from "../middlewares/schedules.middleware";

export const scheduleRouter: Router = Router();

scheduleRouter.post(
  '/',
  verifyToken,
  validadeBody,
  verifyRealEstateExists,
  verifyRealEstateScheduleExists,
  verifyUserScheduleExists
);
scheduleRouter.get('/realEstate/:id', verifyToken, verifyAdmin);
