import React from 'react';
import classes from './EmailInput.module.css';

interface InputProps {
  value: string;
  setValue: any;
}

const EmailInput = ({ value, setValue }: InputProps) => {
  return (
    <input
      className={classes.input}
      type='email'
      placeholder='enter your email'
      value={value}
      onChange={(e) => setValue(e)}
    />
  )
}

export default EmailInput;