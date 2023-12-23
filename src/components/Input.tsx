"use client";

import { Squircle } from "corner-smoothing";

type Props = {
  id: string;
  label: string;
  type?: string;
  req?: boolean;
  err?: string;
};

const Input = ({ id, label, type = "text", req = true, err }: Props) => {
  return (
    <Squircle as={"div"} cornerRadius={12} className="input-wrapper">
      {err && <p>{err}</p>}
      <input type={type} id={id} name={id} placeholder="" required={req} />
      <label htmlFor={id}>{label}</label>
      <span style={{ display: `${req ? "none" : "block"}` }}>Optionnel</span>
    </Squircle>
  );
};

export default Input;
