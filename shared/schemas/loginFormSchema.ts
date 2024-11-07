import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email({ message: "Enter a valid email" }),
  password: z.string().min(6, { message: "Enter a valid password" }),
});

export type TypeLoginFormSchema = z.infer<typeof loginFormSchema>;
