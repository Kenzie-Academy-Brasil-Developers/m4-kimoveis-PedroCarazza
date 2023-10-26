import { Repository } from "typeorm";
import Category from "./entities/Category.entity";
import { AppDataSource } from "./data-source";
import RealEstate from "./entities/RealEstate.entity";
import Address from "./entities/Addresses.entity";
import User from "./entities/User.entity";
import Schedule from "./entities/Schedules.entity";

export const categoryRepo: Repository<Category> = AppDataSource.getRepository(Category);
export const addressRepo: Repository<Address> = AppDataSource.getRepository(Address);
export const userRepo: Repository<User> = AppDataSource.getRepository(User);
export const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);
export const scheduleRepo: Repository<Schedule> = AppDataSource.getRepository(Schedule);