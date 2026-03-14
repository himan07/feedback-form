import { Router } from "express";
import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import FeedbackController from "../controller/feedback.controller";

const router = Router();

router.post("/", (req: Request, res: Response) => {
  const feedbackController = new FeedbackController();
  feedbackController.createFeedback(req, res);
});

export default router;
