import express from "express";
import dotenv from "dotenv";
import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import feedbackRoutes from "./routes/feedbackRoutes";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4001;

// middleware
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Routes
app.use("/api/feedback", feedbackRoutes);

app.get("/health-check", (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({ message: "Backend is running!" });
});
