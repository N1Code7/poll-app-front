import { email, object, string } from "valibot";

export const loginSchema = object({
  email: string([email()]),
  password: string(),
});
