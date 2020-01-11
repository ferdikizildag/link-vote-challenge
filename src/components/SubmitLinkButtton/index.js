import React from 'react';
import './style.scss';

const SubmitLinkButton = ({ title, onClick, className }) => {
    return (
        <div className={`frame ${className}`} onClick={onClick}>
            <div className='icon'>+</div>
            <div className='title'>{title}</div>
        </div>
    )
}

export default SubmitLinkButton;