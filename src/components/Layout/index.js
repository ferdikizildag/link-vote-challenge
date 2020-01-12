import React from 'react';
import { PropTypes } from 'prop-types';
import Header from 'components/Header';
import { Container, Row, Col } from 'react-bootstrap';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        {children}
                    </Col>
                </Row>
            </Container>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
