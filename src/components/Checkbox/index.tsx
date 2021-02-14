import React from "react";
import "./styles.css";

type Props = {
  label: string | React.ReactNode;
};

export type CheckboxProps = Props & React.InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({ label, ...props }: CheckboxProps) => {
  return (
    <label className="checkbox">
      <input type="checkbox" {...props} />
      <span className="checkbox__mark" />
      {label}
    </label>
  );
};

export default Checkbox;
