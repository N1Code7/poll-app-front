import { ValiError } from "valibot";

export type ValiFormError = {
  [name: string]: string;
};

export const valiErrorForms = (err: ValiError) => {
  const issues = err.issues;
  let errors = {} as ValiFormError;

  issues?.forEach(
    (issue) => (errors = { ...errors, [issue.path?.[0].key as string]: issue.message })
  );

  return errors;
};
