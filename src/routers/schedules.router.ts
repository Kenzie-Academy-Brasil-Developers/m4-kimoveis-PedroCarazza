import { Router } from "express";
import { validadeBody, verifyAdmin, verifyToken } from "../middlewares/globals.middleware";
import {
  verifyRealEstateExists,
  verifyRealEstateScheduleExists,
  verifyUserScheduleExists,
} from "../middlewares/schedules.middleware";
import { createNewScheduleSchema } from "../schemas/schedules.schema";
import { createSchedulesController, readAllSchedulesRealEstateController } from "../controllers/schedule.controller";

export const scheduleRouter: Router = Router();

scheduleRouter.post(
  '/',
  verifyToken,
  validadeBody(createNewScheduleSchema),
  verifyRealEstateExists,
  verifyRealEstateScheduleExists,
  verifyUserScheduleExists,
  createSchedulesController
);
scheduleRouter.get('/realEstate/:id', verifyToken, verifyAdmin, readAllSchedulesRealEstateController);
