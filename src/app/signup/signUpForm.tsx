"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { valiErrorForms, type ValiFormError } from "@/validations/formErrors";
import { SignUpSchema } from "@/validations/signUpSchema";
import { Squircle } from "corner-smoothing";
import { FormEvent, useState } from "react";
import { Output, parse, ValiError } from "valibot";

const SignUpForm = () => {
  const [formErrors, setFormErrors] = useState({} as ValiFormError);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    let errors = {} as ValiFormError;

    const formData = new FormData(e.target as HTMLFormElement);

    try {
      const payload: Output<typeof SignUpSchema> = parse(
        SignUpSchema,
        Object.fromEntries(formData.entries())
      );

      // API call ...
    } catch (err) {
      errors = valiErrorForms(err as ValiError);
    }
    setFormErrors(errors);
  };

  return (
    <Squircle cornerRadius={8}>
      <form onSubmit={handleSubmit}>
        <Input id="lastName" label="NOM" />
        <Input id="firstName" label="Prénom" />
        <Input id="email" label="Email" type="email" />
        <Input id="password" label="Mot de passe" type="password" err={formErrors.password} />
        <Input
          id="confirmPassword"
          label="Confirmer votre mot de passe"
          type="password"
          err={formErrors.confirmPassword}
        />
        <Button level="form">Je crée mon compte</Button>
      </form>
    </Squircle>
  );
};

export default SignUpForm;
