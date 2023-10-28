import { NextFunction, Request, Response } from "express";
import Category from "../entities/Category.entity";
import { categoryRepo } from "../repositories";
import AppError from "../errors/AppErrors.error";

export const verifyUniqueCategoryName = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const {name} = req.body;

    const category: Category | null = await categoryRepo.findOneBy({name});

    if(category) throw new AppError('Category alread exists', 409);

    return next();
}

export const verifyCategoryExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const {id} = req.params;

    const category: Category | null = await categoryRepo.findOneBy({id: Number(id)});

    if(!category) throw new AppError('Category not found', 404);

    return next();
}