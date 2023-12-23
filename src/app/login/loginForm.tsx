"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { valiFormErrors, type ValiFormError } from "@/validations/formErrors";
import { loginSchema } from "@/validations/loginSchema";
import { Squircle } from "corner-smoothing";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, MouseEvent, useState } from "react";
import { ValiError, parse } from "valibot";

const LoginForm = () => {
  const router = useRouter();
  const [formErrors, setFormErrors] = useState({} as ValiFormError);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/signup");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let errors = {} as ValiFormError;

    const formData = new FormData(e.target as HTMLFormElement);

    try {
      const payload = parse(loginSchema, Object.fromEntries(formData.entries()));

      // API Call  ...
    } catch (err) {
      errors = valiFormErrors(err as ValiError);
    }
  };

  return (
    <Squircle cornerRadius={8}>
      <form onSubmit={handleSubmit}>
        <Input id="email" label="Email" err={formErrors.email} />
        <Input type="password" id="password" label="Mot de passe" err={formErrors.password} />
        <Link href={"/"}>Mot de passe oublié ?</Link>
        <Button level="form">Je me connecte</Button>
        <Button onClick={handleClick} level="form2">
          Je crée mon compte
        </Button>
      </form>
    </Squircle>
  );
};

export default LoginForm;
