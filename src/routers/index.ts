import { Router } from "express";
import { userRouter } from "./users.router";
import { categoryRouter } from "./categories.router";
import { realEstatesRouter } from "./realEstates.router";
import { scheduleRouter } from "./schedules.router";
import { sessionRouter } from "./session.router";

export const routes: Router = Router();

routes.use('/users', userRouter);
routes.use('/login', sessionRouter);
routes.use('/categories', categoryRouter);
routes.use('/realEstate', realEstatesRouter);
routes.use('/schedules', scheduleRouter);