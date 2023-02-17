import React, { FC } from 'react';
import classes from './CustomPrimaryButton.module.css';

interface ButtonProps {
    children?: React.ReactNode;
    disabled: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomPrimaryButton: FC<ButtonProps> = ({ children, onClick, disabled }) => {
  return (
    <button className={classes.button} onClick={(e) => onClick(e)} disabled={disabled}>{children}</button>
  )
}

export default CustomPrimaryButton;