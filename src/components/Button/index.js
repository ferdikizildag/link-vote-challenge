import React from 'react';
import { PropTypes } from 'prop-types';
import style from './style.module.scss';

const Button = ({ onClick, title, type, disabled }) => {
    return (
        <button className={`${style.button} ${disabled && style.disabled}`} type={type} onClick={onClick} disabled={disabled}>{title}</button>
    );
};

Button.defaultProps = {
    title: 'No Text',
    type: 'button',
    disabled: false
};

Button.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
};

export default Button;
