import { AppDataSource } from "./utils/data-source";
import "reflect-metadata";
import express from "express";
import routes from "./routes";
import { generateFakeUsers } from "./utils/generateFakeUsers";

const port = 4000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

// Make fake data
(async () => {
  await AppDataSource.initialize();
  await generateFakeUsers();
})();

const server = app.listen(port, () => {
  console.log(`Express is listening on port ${port}`);
});

export { app, server };
