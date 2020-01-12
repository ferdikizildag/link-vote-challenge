import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import style from './style.module.scss';

const Header = () => {
    return (
        <Container className={style.hbHeader}>
            <Row>
                <Col md={4}>
                    <span className={style.darkLogo}>hepsiburada</span>
                    <span className={style.lightLogo}>.com</span>
                </Col>
                <Col md={{ span: 4, offset: 4 }} className='text-right'>
                    <span className={style.darkItem}>Link</span>
                    <span className={style.thinItem}>VOTE</span>
                    <span className={style.normalItem}>Challenge</span>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;