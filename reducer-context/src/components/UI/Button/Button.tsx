import React, { ButtonHTMLAttributes } from 'react';

import classes from './Button.module.css';

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
