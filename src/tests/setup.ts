import supertest from "supertest";
import { app } from "../index";
import { AppDataSource } from "../utils/data-source";

beforeAll(async () => {
  await AppDataSource.initialize();
});

afterAll(async () => {});

export const request = supertest(app);
