import { z } from "zod";
import { createRealEstateSchema, readRealEstateSchema } from "../schemas/realEstates.schemas";
import { Repository } from "typeorm";
import RealEstate from "../entities/RealEstate.entity";
import Address from "../entities/Addresses.entity";

export type CreateRealEstate = z.infer<typeof createRealEstateSchema>;

export type ReadRealEstate = z.infer<typeof readRealEstateSchema>;

export type RealEstateRepo = Repository<RealEstate>;

export type AddressRepo = Repository<Address>;