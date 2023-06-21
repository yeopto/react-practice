import { ReactNode } from 'react';
import classes from './Card.module.css';

const Card = ({ className, children }: { className: string; children: ReactNode }) => {
  return <div className={`${classes.card} ${className}`}>{children}</div>;
};

export default Card;
