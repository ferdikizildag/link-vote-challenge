import React from 'react';
import { reduxForm } from 'redux-form';
import Input from 'components/Input';
import Button from 'components/Button';
import style from './style.module.scss';
import { Row, Col } from 'react-bootstrap';

const required = (value) => value ? undefined : 'Required';

export const CreateLinkForm = ({ handleSubmit, pristine, submitting }) => {
    return (
        <form onSubmit={handleSubmit}>
            <h1 className={style.formTitle}>Add New Link</h1>
            <Input name="name" placeholder="e.g. Alphabet" label="Link Name:" validate={required} />
            <Input name="link" placeholder="e.g. http://abc.xyz" label="Link URL:" validate={required} />
            <Row>
                <Col md={{ span: 4, offset: 8 }}>
                    <Button title="ADD" type="submit" disabled={pristine || submitting} />
                </Col>
            </Row>
        </form>
    );
};

export default reduxForm({
    form: 'createLinkForm',
})(CreateLinkForm);
