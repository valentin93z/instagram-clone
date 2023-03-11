import { FC, useState } from 'react';
import { PostsTabFilledIcon, PostsTabOutlinedIcon, ReelsTabFilledIcon, ReelsTabOutlinedIcon, TagsTabFilledIcon, TagsTabOutlinedIcon } from '../UI/icons/ProfileIcons';
import classes from './ProfileTabs.module.css';
import Posts from './tabs/posts/Posts';
import Reels from './tabs/reels/Reels';
import Tags from './tabs/tags/Tags';


interface TabProps {
  posts: Array<any>;
  reels?: Array<any>;
  tags?: Array<any>;
}

const ProfileTabs: FC<TabProps> = ({ posts, reels, tags }) => {

    const [ tabValue, setTabValue ] = useState('posts');

  return (
    <div className={classes.profile_tabs}>
      <div className={classes.tabs_control}>
        <div className={classes.tab} onClick={() => setTabValue('posts')}>
          {tabValue === 'posts' ? <PostsTabFilledIcon /> : <PostsTabOutlinedIcon />}
        </div>
        <div className={classes.tab} onClick={() => setTabValue('reels')}>
          {tabValue === 'reels' ? <ReelsTabFilledIcon /> : <ReelsTabOutlinedIcon />}
        </div>
        <div className={classes.tab} onClick={() => setTabValue('tags')}>
          {tabValue === 'tags' ? <TagsTabFilledIcon /> : <TagsTabOutlinedIcon />}
        </div>
      </div>
      <div className={classes.tabs_content}>
        {tabValue === 'posts' && <Posts posts={posts} />}
        {tabValue === 'reels' && <Reels />}
        {tabValue === 'tags' && <Tags />}
      </div>
    </div>
  )
}

export default ProfileTabs;