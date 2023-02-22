import React from 'react';
import classes from './BottomPanel.module.css';
import { HomeOutlinedIcon, ExploreOutlinedIcon, MessagesOutlinedIcon, ReelsOutlinedIcon, SearchOutlinedIcon } from '../UI/icons/BottomPanelIcon';


const BottomPanel = () => {
  return (
    <div className={classes.panel}>
      <div className={classes.icon_container}>
        <HomeOutlinedIcon />
      </div>
      <div className={classes.icon_container}>
        <SearchOutlinedIcon />
      </div>
      <div className={classes.icon_container}>
        <ReelsOutlinedIcon />
      </div>
      <div className={classes.icon_container}>
        <MessagesOutlinedIcon />
      </div>
      <div className={classes.icon_container}>
        <ExploreOutlinedIcon />
      </div>
    </div>
  )
}

export default BottomPanel;