import { z } from "zod";

const passwordSchema = z.string().min(6, { message: "Enter a valid password" });

export const registerFormSchema = z
  .object({
    fullName: z.string().min(2, { message: "Enter your full name" }),
    email: z.string().email({ message: "Enter a valid email" }),
    password: passwordSchema,
    confirmPassword: passwordSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type TypeRegisterFormSchema = z.infer<typeof registerFormSchema>;
