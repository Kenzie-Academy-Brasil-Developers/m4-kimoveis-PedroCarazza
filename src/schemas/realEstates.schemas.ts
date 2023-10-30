import { z } from "zod";

export const realEstateSchema = z.object({
    id: z.number().positive(),
    sold: z.boolean().default(false),
    value: z.number().positive().or(z.string()).default(0),
    size: z.number().positive().int(),
    createdAt: z.string(),
    updatedAt: z.string(),
    address: z.object({
        street: z.string().max(45),
        zipCode: z.string().max(8),
        number: z.number().positive().int(),
        city: z.string().max(20),
        state: z.string().max(2)        
    }),
    categoryId: z.number().positive().int()
});

export const createRealEstateSchema = realEstateSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    sold: true
});

export const readRealEstateSchema = realEstateSchema.array();

