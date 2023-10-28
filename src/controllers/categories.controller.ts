import { Request, Response } from "express";
import { createCategoryService, readCategoriesService, readRealEstateByCategoryService } from "../services/categories.service";

export const createCategoryController = async (req: Request, res: Response): Promise<Response> => {
    const category = await createCategoryService(req.body);
    
    return res.status(201).json(category);
};

export const readCategoriesController = async (req: Request, res: Response): Promise<Response> => {
    const categories = await readCategoriesService();

    return res.status(200).json(categories);
};

export const readRealEstateByCategoryController = async (req: Request, res: Response): Promise<Response> => {
    const {id} = req.params;

    const realEstates = await readRealEstateByCategoryService(Number(id));

    return res.status(200).json(realEstates);
};