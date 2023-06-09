import { AppDataSource } from "./utils/data-source";
import "reflect-metadata";
import express from "express";
import routes from "./routes";
import { generateFakeUsers } from "./utils/generateFakeUsers";
import * as winston from "winston";
import { errorHandler } from "./utils/errorHandler";
import { scheduleJob } from "node-schedule";
import { Checkout } from "./entity/checkout";
import { LessThan } from "typeorm";

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

// TODO: add cronjob to remove appointments passed due
scheduleJob("*/15 * * * *", async function () {
  // find all checkouts passed their experation date + 15mins and remove them
  try {
    // given nothing display all pending items
    const currentDateMinus15Minutes = new Date();
    currentDateMinus15Minutes.setMinutes(
      currentDateMinus15Minutes.getMinutes() - 15
    );

    const device_details = await Checkout.findBy({
      checkout_date: LessThan(currentDateMinus15Minutes),
    });

    const removed_users = await Checkout.remove(device_details);

    console.log(`Removed ${removed_users.length} missed appointments`);
  } catch (err) {
    console.log(err);
  }
});

export { app, server, logger };
