import { FC, useState } from 'react';
import { ReelsIcon } from '../../../UI/icons/Icons';
import EmptyTab from '../emptyTab/EmptyTab';


const Reels: FC = () => {

  const [reels, setReels] = useState(false);

  return (
    <div>
      {reels
        ?
          <div>Reels</div>
        :
          <EmptyTab title='No Reels Yet'>
            <ReelsIcon width='50px' height='50px' />
          </EmptyTab>}
    </div>
    
  )
}

export default Reels;