import type { Request, Response } from "express";
import type { FeedbackForm } from "../constant/types/types-feedbackForm";
import { StatusCodes } from "http-status-codes";
import FeedbackService from "../services/feedback.service";

class FeedbackController {
  private feedbackService: FeedbackService;
  constructor() {
    this.feedbackService = new FeedbackService();
  }

  async createFeedback(req: Request, res: Response) {
    const feedback = req.body as FeedbackForm;

    await this.feedbackService.saveFeedback(feedback);

    res
      .status(StatusCodes.CREATED)
      .json({ success: true, message: "Feedback received successfully" });
  }
}

export default FeedbackController;
