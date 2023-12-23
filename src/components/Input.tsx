"use client";

import { Squircle } from "corner-smoothing";

type Props = {
  id: string;
  label: string;
  type?: string;
  req?: boolean;
};

const Input = ({ id, label, type = "text", req = true }: Props) => {
  return (
    <Squircle as={"div"} cornerRadius={12} className="input-wrapper">
      <input type={type} id={id} name={id} placeholder="" required={req} />
      <label htmlFor={id}>{label}</label>
      <span style={{ display: `${req ? "none" : "block"}` }}>Optionnel</span>
    </Squircle>
  );
};

export default Input;
