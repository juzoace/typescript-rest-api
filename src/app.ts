import express, { Request, Response } from "express";
// import dotenv from "dotenv";
// dotenv.config();
import config from "config";
import connect from "./utils/connect";
import createServer from './utils/server'
import routes from './routes';

const port = config.get<number>("port");
console.log(port)
const app = createServer();

app.listen(port, async () => {
  await connect();
 
  routes(app);

});