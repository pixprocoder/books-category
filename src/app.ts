import cors from "cors";
import "dotenv/config";
import express, { Application } from "express";
import routers from "./app/routes";

const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", (req, res) => {
  res.send("Hello From Assignment 8");
});
app.use("/api/v1", routers);
export default app;
