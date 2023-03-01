import { FC, useState } from 'react';
import { TagsIcon } from '../../../UI/icons/Icons';
import EmptyTab from '../emptyTab/EmptyTab';


const Tags: FC = () => {

  const [tags, setTags] = useState(false);

  return (
    <div>
      {tags
        ?
          <div>Tags</div>
        :
          <EmptyTab title='Photos and videos of you' description="When people tag you in photos or videos, they'll appear here.">
            <TagsIcon width='50px' height='50px' />
          </EmptyTab>}
    </div>
  )
}

export default Tags;