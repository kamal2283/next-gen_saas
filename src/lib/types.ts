import { z } from "zod";

export const EditUserProfileSchema = z.object({
  email: z.string().email("required"),
  name: z.string().min(1, "required"),
});
