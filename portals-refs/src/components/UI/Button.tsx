import { ButtonHTMLAttributes, ReactNode } from 'react';
import classes from './Button.module.css';

const Button = ({
  type,
  children,
  onClick,
}: {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  children: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button className={classes.button} type={type || 'button'} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
