import express from "express";
import dotenv from 'dotenv';
dotenv.config();

import Logger from "./lib/logger";
import { defaultRoute } from "./routes/defaultRoute";


const app = express();

// routes
app.use('/', defaultRoute);

app.get("/logger", (_, res) => {
  Logger.error("This is an error log");
  Logger.warn("This is a warn log");
  Logger.info("This is a info log");
  Logger.http("This is a http log");
  Logger.debug("This is a debug log");

  res.send("Hello world");
});

app.listen(process.env.PORT, () => {
  Logger.debug(`Server is up and running @ http://localhost:${process.env.PORT}`);
});