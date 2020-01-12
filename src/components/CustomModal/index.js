import React from 'react';
import { PropTypes } from 'prop-types';
import { Modal, Col, Row, Container } from 'react-bootstrap';
import Button from 'components/Button';
import style from './style.module.scss';

const CustomModal = ({ visibility, onClickCancel, onClickOk, data, header, question }) => {
    return (
        <Modal show={visibility} onHide={onClickCancel} className="confirmationModalHolder">
            <div className={style.header}>
                <span>{header}</span>
                <span className={style.closeBtn} onClick={onClickCancel}>
                    <span className="oi oi-x"></span>
                </span>
            </div>
            <div className={style.content}>
                <div className={style.question}>{question}</div>
                <div className={style.linkName}>{data.name}</div>
                <Container>
                    <Row>
                        <Col md={{ span: 4, offset: 2 }}>
                            <Button title="OK" onClick={onClickOk} />

                        </Col>
                        <Col md={{ span: 4 }}>
                            <Button title="CANCEL" onClick={onClickCancel} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </Modal>
    )
}

CustomModal.defaultProps = {
    header: 'No Text',
    question: 'No Text',
    visibility: false,
    data: {}
};

CustomModal.propTypes = {
    header: PropTypes.string,
    question: PropTypes.string,
    onClickOk: PropTypes.func,
    onClickCancel: PropTypes.func,
    visibility: PropTypes.bool,
    data: PropTypes.object
};

export default CustomModal;