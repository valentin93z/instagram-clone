import { FC } from 'react';
import classes from './EmptyTab.module.css';

interface EmptyTabProps {
    title?: string;
    description?: string;
    link?: string;
    children?: React.ReactNode;
}

const EmptyTab: FC<EmptyTabProps> = ({ title, description, link, children }) => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.circle_border}>
          {children}
        </div>
        <p className={classes.title}>{title}</p>
        <p className={classes.description}>{description}</p>
        <p className={classes.link}>{link}</p>
      </div>
    </div>
  )
}

export default EmptyTab;