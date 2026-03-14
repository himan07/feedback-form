import type { Request, Response } from "express";
import type { FeedbackForm } from "../constant/types/types-feedbackForm";
import { StatusCodes } from "http-status-codes";

class FeedbackController {
  constructor() {}

  async createFeedback(req: Request, res: Response) {
    const feedback = req.body as FeedbackForm;
    console.log("Received feedback:", feedback);
    res
      .status(StatusCodes.CREATED)
      .json({ success: true, message: "Feedback received successfully" });
  }
}

export default FeedbackController;
