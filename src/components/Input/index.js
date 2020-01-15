import React from 'react';
import { PropTypes } from 'prop-types';
import { Field } from 'redux-form';
import style from './style.module.scss';

const renderField = ({
    input,
    label,
    type,
    className,
    meta: { touched, error, warning }
  }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} className={className} />
        {error && <span className={style.error}>{error}</span>}
      </div>
    </div>
  )

const Input = ({ name, label, placeholder ,validate}) => {
    return (
        <div className={style.frame}>
            <label className={style.label}>{label}</label>
            <div>
                <Field
                    className={style.input}
                    name={name}
                    component={renderField}
                    type="text"
                    placeholder={placeholder}
                    validate={validate}
                />
            </div>
        </div>
    );
};

Input.defaultProps = {
    label: 'No Text',
    placeholder: 'No Text'
};

Input.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    validate: PropTypes.func
};

export default Input;
