import React from 'react';
import classes from './SignBottomPanel.module.css';

interface SignProps {
    text?: string;
    title?: string;
    path?: string;
}

const SignBottomPanel = ({ text, title, path }: SignProps) => {
  return (
    <div className={classes.panel}>
      <div>
        <span>{text} </span>
        <a className={classes.panel_link} href={path}>{title}</a>
      </div>
    </div>
  )
}

export default SignBottomPanel;