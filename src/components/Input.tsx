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
    <div className="input-with-error">
      {err && <p className="input-error">{err}</p>}
      <Squircle as={"div"} cornerRadius={12} className="input-wrapper">
        <input
          type={type}
          id={id}
          name={id}
          className={err ? "error" : undefined}
          placeholder=""
          required={req}
        />
        <label htmlFor={id}>{label}</label>
        <span style={{ display: `${req ? "none" : "block"}` }}>Optionnel</span>
      </Squircle>
    </div>
  );
};

export default Input;
