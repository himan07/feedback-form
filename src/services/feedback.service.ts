import type { FeedbackForm } from "../constant/types/types-feedbackForm";
import prisma from "../lib/prismaClient";

class FeedbackService {
  constructor() {}

  async saveFeedback(feedback: FeedbackForm): Promise<void> {
    await prisma.feedback.create({
      data: feedback,
    });
  }
}

export default FeedbackService;
