import React from 'react';
import classes from './CircleLoader.module.css';

const CircleLoader = () => {
  return (
    <div className={classes.loader_container}>
        <span className={classes.loader}></span>
    </div>
  )
}

export default CircleLoader;