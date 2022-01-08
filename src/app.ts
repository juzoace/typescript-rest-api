import express, { Request, Response } from "express";
// import dotenv from "dotenv";
// dotenv.config();
import config from "config";
import connect from "./utils/connect";

const port = config.get<number>("port");

const app = express();

app.listen(port, async () => {
  await connect();
})