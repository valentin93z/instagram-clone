import React, { useState } from 'react';
import classes from './Profile.module.css';
import { ref } from 'firebase/storage';
import { useAppSelector } from '../../app/hooks';
import { storage } from '../../firebaseConfig';
import { useDownloadURL } from 'react-firebase-hooks/storage';
import { DiscoverPeopleIcon, PostsTabIcon, ReelsTabIcon, TagsTabIcon } from '../../components/UI/icons/ProfileIcons';

const Profile = () => {

  const { username, firstname, lastname, profilePhoto } = useAppSelector(state => state.authReducer.user);
  const [ photoUrl ] = useDownloadURL(profilePhoto ? ref(storage, profilePhoto) : null);

  const [ tabValue, setTabValue ] = useState('posts');
  
  return (
    <div>
      <div className={classes.upbar}>
        <div className={classes.username}>{username}</div>
        <div className={classes.menu_button}>
        <svg height='14px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>        </div>
      </div>
      <div className={classes.profile_header}>
        <div className={classes.profile_info}>
          <div className={classes.profile_photo}>
            <img width='100%' src={photoUrl} alt='' style={{objectFit: 'cover'}} />
          </div>
          <ul className={classes.user_info_list}>
            <li className={classes.user_info_item}>
              <p className={classes.item_count}>124</p>
              <p className={classes.item_title}>Posts</p>
            </li>
            <li className={classes.user_info_item}>
              <p className={classes.item_count}>655</p>
              <p className={classes.item_title}>Followers</p>
            </li>
            <li className={classes.user_info_item}>
              <p className={classes.item_count}>321</p>
              <p className={classes.item_title}>Following</p>
            </li>
          </ul>
        </div>
        <div className={classes.profile_bio}>
          <p>{firstname} {lastname}</p>
          <p>biography...</p>
          <a className={classes.profile_link} href='https://www.google.ru'>www.google.ru</a>
        </div>
      </div>
      <div className={classes.profile_buttons}>
        <button className={classes.profile_button_grey}>Edit profile</button>
        <button className={classes.profile_button_grey}>Share profile</button>
        <button className={classes.button_discover_people}>
          <DiscoverPeopleIcon />
        </button>
      </div>
      <ul className={classes.highlights_list}>
        <li className={classes.highlights_item}>
          <div className={classes.highlights_circle}>
            <p>+</p>
          </div>
          <p className={classes.highlights_title}>New</p>
        </li>
      </ul>
      <div className={classes.profile_tabs}>
        <div className={classes.tabs_control}>
          <div className={classes.tab}>
            <input
              className={classes.tab_input}
              type="radio"
              name="profile_tabs"
              id="tab_posts"
              checked={tabValue === 'posts'}
              onChange={() => setTabValue('posts')}
            />
            <label htmlFor='tab_posts'>
              <PostsTabIcon />
            </label>
          </div>
          <div className={classes.tab}>
            <input
              className={classes.tab_input}
              type="radio"
              name="profile_tabs"
              id="tab_reels"
              checked={tabValue === 'reels'}
              onChange={() => setTabValue('reels')}
            />
            <label htmlFor='tab_reels'>
              <ReelsTabIcon />
            </label>
          </div>
          <div className={classes.tab}>
            <input
              className={classes.tab_input}
              type="radio"
              name="profile_tabs"
              id="tab_tags"
              checked={tabValue === 'tags'}
              onChange={() => setTabValue('tags')}
            />
            <label htmlFor='tab_tags'>
              <TagsTabIcon />
            </label>
          </div>
        </div>
        <div className={classes.tabs_content}>
          {tabValue === 'posts' && <div>posts</div>}
          {tabValue === 'reels' && <div>reels</div>}
          {tabValue === 'tags' && <div>tags</div>}
        </div>
      </div>
    </div>
  )
}

export default Profile;