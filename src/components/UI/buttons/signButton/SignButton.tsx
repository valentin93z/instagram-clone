import React from 'react';
import classes from './SignButton.module.css';

interface ButtonProps {
    type?: string;
    children?: React.ReactNode;
    status?: boolean;
}

const SignButton = ({ type, children, status }: ButtonProps) => {
  return (
    <button className={classes.button} disabled={status}>{children}</button>
  )
}

export default SignButton;