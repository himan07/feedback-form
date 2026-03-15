import { Prisma } from "../../generated/prisma/client";
import prismaClient from "../lib/prismaClient";

const { prisma } = prismaClient;

class FeedbackService {
  constructor() {}

  async saveFeedback(feedback: Prisma.FeedbackCreateInput): Promise<void> {
    await prisma.feedback.create({
      data: feedback,
    });
  }
}

export default FeedbackService;
