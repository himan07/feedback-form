import { Router } from "express";
import type { Request, Response } from "express";
import FeedbackController from "../controller/feedback.controller";

const router = Router();
const feedbackController = new FeedbackController();

router.post("/", (req: Request, res: Response) => {
  feedbackController.createFeedback(req, res);
});

export default router;
