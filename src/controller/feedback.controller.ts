import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import FeedbackService from "../services/feedback.service";
import { feedbackSchema } from "../constant/validations/feedback.validation";

class FeedbackController {
  private feedbackService: FeedbackService;
  constructor() {
    this.feedbackService = new FeedbackService();
  }

  async createFeedback(req: Request, res: Response): Promise<void> {
    const validation = feedbackSchema.safeParse(req.body);

    if (!validation.success) {
      res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: validation.error.issues.map((err) => err.message),
      });
      return;
    }

    const feedback = validation.data;

    await this.feedbackService.saveFeedback({
      ...feedback,
      notify: feedback.notification,
    });

    res
      .status(StatusCodes.CREATED)
      .json({ success: true, message: "Feedback received successfully" });
  }
}

export default FeedbackController;
