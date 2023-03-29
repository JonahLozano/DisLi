import { AppDataSource } from "./utils/data-source";
import "reflect-metadata";
import express from "express";
import routes from "./routes";
import { clearDB } from "./utils/clearDB";
import { Person } from "./entity/person";
import { UserRole } from "./utils/UserRoles";

const port = 4000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

app.get("/", (_, res) => {
  res.send("SUP!");
});

app.get("/dev/wipe-database", async (_, res) => {
  clearDB();
  res.send("deleted");
});

const makeFakeData = async () => {
  try {
    const alice = Person.create({
      university_id: "0000-0000-0000-0001",
      email: "alice@alice.alice",
      first_name: "Alice",
      last_name: "Alison",
      phone_number: "555-555-5555",
      role: UserRole.FRESHMEN,
    });

    await Person.insert(alice);
  } catch (err) {
    console.log(err);
  }
};

makeFakeData();

AppDataSource.initialize();

app.listen(port, () => {
  console.log(`Express is listening on port ${port}`);
});
