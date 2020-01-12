import React from 'react';
import style from './style.module.scss';

const SubmitLinkButton = ({ title, onClick, className }) => {
    return (
        <div className={`${style.frame} ${className}`} onClick={onClick}>
            <div className={style.icon}>+</div>
            <div className={style.title}>{title}</div>
        </div>
    )
}

export default SubmitLinkButton;