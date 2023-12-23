"use client";

import { Squircle } from "corner-smoothing";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  level?: string;
}>;

const Button = ({
  level = "primary",
  children,
  ...rest
}: ComponentPropsWithoutRef<"button"> & Props) => {
  return (
    <Squircle className={`btn-wrapper`} cornerRadius={12}>
      <button className={`btn btn-${level}`} {...rest}>
        {children}
      </button>
    </Squircle>
  );
};

export default Button;
