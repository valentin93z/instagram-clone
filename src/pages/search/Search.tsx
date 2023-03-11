import { FC, useState } from 'react';
import classes from './Search.module.css';
import SearchBar from '../../components/searchBar/SearchBar';
import { LeftArrow } from '../../components/UI/icons/Icons';

const Search: FC = () => {

  const [value, setValue] = useState('');

  return (
    <div className={classes.search_container}>
      <div className={classes.search_topbar} style={{gridTemplateColumns: value ? 'auto 1fr' : '1fr'}}>
        <div className={classes.topbar_icon_container} style={{display: value ? 'block' : 'none'}}>
          <LeftArrow width='10px' height='20px' />
        </div>
        <SearchBar value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
      
    </div>
  )
}

export default Search;