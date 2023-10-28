import { Request, Response } from "express";
import { createSchedulesService, readAllSchedulesRealEstateService } from "../services/schedules.service";

export const createSchedulesController = async (req: Request, res: Response): Promise<Response> => {
    const {sub} = res.locals.decoded;

    await createSchedulesService(req.body, sub);

    return res.status(201).json({message: 'Schedule created'});
};

export const readAllSchedulesRealEstateController = async (req: Request, res: Response): Promise<Response> => {
    const {id} = req.params;
    
    const realEstate = await readAllSchedulesRealEstateService(Number(id));

    return res.status(200).json(realEstate);
};