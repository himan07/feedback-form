import { z } from "zod";
import {
  CATEGORY_REQUIRED,
  EMAIL_INVALID,
  MESSAGE_REQUIRED,
  NAME_REQUIRED,
  NOTIFICATION_REQUIRED,
  RATING_INVALID,
} from "../validationError";

export const feedbackSchema = z.object({
  name: z.string().min(1, NAME_REQUIRED),
  email: z.string().min(1, EMAIL_INVALID),
  message: z.string().min(1, MESSAGE_REQUIRED),
  category: z.string().min(1, CATEGORY_REQUIRED),
  rating: z.number().min(1, RATING_INVALID).max(10),
  notification: z.boolean().refine((value) => value === true, {
    message: NOTIFICATION_REQUIRED,
  }),
});
