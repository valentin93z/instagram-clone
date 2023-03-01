import { FC, useState } from 'react';
import classes from './BottomPanel.module.css';
import { HomeFilledIcon, HomeOutlinedIcon, MessagesFilledIcon, MessagesOutlinedIcon, ReelsFilledIcon, ReelsOutlinedIcon, SearchFilledIcon, SearchOutlinedIcon, UserFilledIcon, UserOutlinedIcon } from '../UI/icons/BottomPanelIcon';
import { Link, useLocation } from 'react-router-dom';


const BottomPanel: FC = () => {

  const location = useLocation();

  return (
    <div className={classes.panel}>
      <div className={classes.icon_container}>
        <Link to='/main/home'>
          {location.pathname === '/main/home' ? <HomeFilledIcon /> : <HomeOutlinedIcon />}
        </Link>
      </div>
      <div className={classes.icon_container}>
        <Link to='/main/search'>
          {location.pathname === '/main/search' ? <SearchFilledIcon /> : <SearchOutlinedIcon />}
        </Link>
      </div>
      <div className={classes.icon_container}>
        <Link to='/main/reels'>
          {location.pathname === '/main/reels' ? <ReelsFilledIcon /> : <ReelsOutlinedIcon />}
        </Link>
      </div>
      <div className={classes.icon_container}>
        <Link to='/main/messages'>
          {location.pathname === '/main/messages' ? <MessagesFilledIcon /> : <MessagesOutlinedIcon />}
        </Link>
      </div>
      <div className={classes.icon_container}>
        <Link to='/main/profile'>
          {location.pathname === '/main/profile' ? <UserFilledIcon /> : <UserOutlinedIcon />}
        </Link>
      </div>
    </div>
  )
}

export default BottomPanel;