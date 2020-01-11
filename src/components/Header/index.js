import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss';

const Header = () => {
    return (
        <Container className='hbHeader'>
            <Row>
                <Col md={4}>
                    hepsiburada.com
                </Col>
                <Col md={{ span: 4, offset: 4 }} className='text-right'>
                    LinkVOTE Challenge
                </Col>
            </Row>
        </Container>
    )
}

export default Header;