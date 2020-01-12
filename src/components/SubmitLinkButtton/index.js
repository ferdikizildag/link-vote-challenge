import React from 'react';
import { PropTypes } from 'prop-types';
import style from './style.module.scss';

const SubmitLinkButton = ({ title, onClick, className }) => {
    return (
        <div className={`${style.frame} ${className}`} onClick={onClick}>
            <div className={style.icon}>+</div>
            <div className={style.title}>{title}</div>
        </div>
    )
}

SubmitLinkButton.defaultProps = {
    title: 'No Text'
};

SubmitLinkButton.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string
};

export default SubmitLinkButton;