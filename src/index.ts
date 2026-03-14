import express from "express";
import dotenv from "dotenv";
import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/health-check", (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({ message: "Backend is running!" });
});
