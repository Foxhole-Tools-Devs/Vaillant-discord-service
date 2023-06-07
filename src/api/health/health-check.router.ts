import express, { Request, Response } from "express";

export const healthCheckRouter = express.Router()

healthCheckRouter.get("/", async (req: Request, res: Response) => {
  res.status(200).send("Ok !");
});