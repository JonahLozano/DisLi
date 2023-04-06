import { AppDataSource } from "./utils/data-source";
import "reflect-metadata";
import express from "express";
import routes from "./routes";
import { generateFakeUsers } from "./utils/generateFakeUsers";
import * as winston from "winston";
import { errorHandler } from "./utils/errorHandler";

const port = 4000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

app.use(errorHandler);

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({
      filename: "/app/logs/error.log",
      level: "error",
    }),
    new winston.transports.File({ filename: "/app/logs/combined.log" }),
  ],
});

(async () => {
  await AppDataSource.initialize();

  await generateFakeUsers();
})();

const server = app.listen(port, () => {
  logger.info(`Express is listening on port ${port}`);
});

export { app, server, logger };
