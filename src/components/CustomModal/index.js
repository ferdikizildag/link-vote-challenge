import React from 'react';
import { Modal } from 'react-bootstrap';
import './style.scss';

const CustomModal = ({ visibility, onClickCancel, onClickOk, data }) => {
    return (
        <Modal show={visibility} onHide={onClickCancel} className="confirmationModalHolder">
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className="modalContent">
                    <div className="question">Do you want to remove:</div>
                    <div className="linkName">{data.name}</div>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <span onClick={onClickOk}>OK</span>
                <span onClick={onClickCancel}>CANCEL</span>
            </Modal.Footer>
        </Modal>
    )
}

export default CustomModal;