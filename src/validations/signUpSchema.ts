import { capitalize } from "@/utils/capitalize";
import { custom, email, forward, minLength, object, required, string, transform } from "valibot";

export const SignUpSchema = transform(
  object(
    {
      lastName: string(),
      firstName: string(),
      email: string([email("L'email saisi n'est pas conforme !")]),
      password: string([minLength(6, "Le mot de passe doit contenir 6 caractères minimum !")]),
      confirmPassword: string(),
    },
    [
      forward(
        custom(
          (input) => input.password === input.confirmPassword,
          "Les deux mots de passe ne correspondent pas !"
        ),

        ["confirmPassword"]
      ),
    ]
  ),
  (input) => ({
    ...input,
    lastName: input.lastName.toUpperCase(),
    firstName: capitalize(input.firstName),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  })
);
