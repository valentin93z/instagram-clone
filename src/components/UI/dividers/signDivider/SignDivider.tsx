import React from 'react';
import classes from './SignDivider.module.css';

const SignDivider = () => {
  return (
    <div className={classes.divider}>
        <hr className={classes.divider_line} />
        <div className={classes.divider_text}>OR</div>
        <hr className={classes.divider_line} />
    </div>
  )
}

export default SignDivider;