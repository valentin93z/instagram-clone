import { FC, useState } from 'react';
import { CameraIcon } from '../../../UI/icons/Icons';
import EmptyTab from '../emptyTab/EmptyTab';


const Posts: FC = () => {

  const [posts, setPosts] = useState(false);

  return (
    <div>
      {posts
        ?
          <div>Posts</div>
        :
          <EmptyTab title='No Posts Yet'>
            <CameraIcon width='50px' height='50px' />
          </EmptyTab>}
    </div>
  )
}

export default Posts;