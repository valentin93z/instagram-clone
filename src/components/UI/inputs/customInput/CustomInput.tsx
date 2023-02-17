import React, { FC } from 'react';
import classes from './CustomInput.module.css';

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: FC<InputProps> = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      className={classes.input}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e)}
    />
  )
}

export default CustomInput;