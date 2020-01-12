import React from 'react';
import style from './style.module.scss';

const Button = ({ onClick, title, type = 'button', disabled = false }) => {
    return (
        <button className={`${style.button} ${disabled && style.disabled}`} type={type} onClick={onClick} disabled={disabled}>{title}</button>
    );
};

export default Button;
