import { FC } from 'react';
import { CameraIcon } from '../../../UI/icons/Icons';
import EmptyTab from '../emptyTab/EmptyTab';
import classes from './Posts.module.css';


interface PostProps {
  posts: Array<any>;
}

const Posts: FC<PostProps> = ({ posts }) => {

  return (
    <div className={classes.posts_container}>
      {posts.length !== 0
        ?
          <ul className={classes.posts_list}>
            {
              [...posts].sort((a, b) => b.dateCreated - a.dateCreated).map((post, index) =>
                <li className={classes.post_item} key={index}>
                  <img className={classes.post_img} width='100%' src={post.photos[0]} />
                </li>)
            }
          </ul>
        :
          <EmptyTab title='No Posts Yet'>
            <CameraIcon width='50px' height='50px' />
          </EmptyTab>
      }
    </div>
  )
}

export default Posts;