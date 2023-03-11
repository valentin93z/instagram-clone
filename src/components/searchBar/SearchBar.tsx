import { FC } from 'react';
import { SearchIcon } from '../UI/icons/Icons';
import classes from './SearchBar.module.css';


interface SearchBarProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className={classes.search_bar}>
      <input className={classes.search_bar_input}
        type='text'
        placeholder='Search'
        style={{paddingLeft: value ? '12px' : '33px'}}
        value={value}
        onChange={(e) => onChange(e)}
      />
      <div className={classes.search_icon_container} style={{display: value ? 'none' : 'block'}}>
        <SearchIcon width='16px' />
      </div>
    </div>
  )
}

export default SearchBar;