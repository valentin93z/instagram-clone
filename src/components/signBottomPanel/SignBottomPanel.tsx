import React from 'react';
import { Link } from 'react-router-dom';
import classes from './SignBottomPanel.module.css';

interface SignProps {
    text: string;
    title: string;
    path: string;
}

const SignBottomPanel = ({ text, title, path }: SignProps) => {
  return (
    <div className={classes.panel}>
      <div>
        <span>{text} </span>
        <Link className={classes.panel_link} to={path}>{title}</Link>
      </div>
    </div>
  )
}

export default SignBottomPanel;