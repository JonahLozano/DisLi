import { Express } from "express";
import Launcher from "./routes/launcher";
import Application from "./routes/application";
import Help from "./routes/help";
import Inventory from "./routes/inventory";
import Program from "./routes/program";
import Stats from "./routes/stats";
import Profile from "./routes/profile";
import Dev from "./utils/dev";
import Home from "./utils/home";

const routes = (app: Express) => {
  app.use("/launcher", Launcher);
  app.use("/application", Application);
  app.use("/stats", Stats);
  app.use("/help", Help);
  app.use("/inventory", Inventory);
  app.use("/program", Program);
  app.use("/profile", Profile);
  app.use("/dev", Dev);
  app.use("/", Home);
};

export default routes;
