import React from 'react';
import { Field } from 'redux-form';
import style from './style.module.scss';

const Input = ({ name, label, placeholder ,validate}) => {
    return (
        <div className={style.frame}>
            <label className={style.label}>{label}</label>
            <div>
                <Field
                    className={style.input}
                    name={name}
                    component="input"
                    type="text"
                    placeholder={placeholder}
                    validate={validate}
                />
            </div>
        </div>
    );
};

export default Input;
