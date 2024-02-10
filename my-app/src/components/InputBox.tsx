import React from "react";
import { ChangeEventHandler } from "react";

interface Props {
  label?: string;
  type?: string;
  id?: string;
  onChange?: any;
  placeholder?: string;
}

const InputBox = ({ label, type = "text", id, onChange, placeholder }: Props) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <br />
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        style={{ height: "20px", padding: "5px" }}
      />
    </div>
  );
};

export default InputBox;
