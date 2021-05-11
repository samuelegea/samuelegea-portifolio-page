import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Container } from './styles';
import avatar from './../../assets/avatar.jpg'

export function Hero() {
    return (
        <Container>
            <div className="content">
                    <Row className="mt-10">
                        <Col sm={6} >
                            <div className="d-none d-md-flex justify-content-end">

                                <img src={avatar} className="avatar" width="300" height="300" object-fit="cover"/>
                            </div>

                            <div className="d-md-none d-flex justify-content-center">

                                <img src={avatar} className="avatar" width="300" height="300" object-fit="cover"/>
                            </div>
                        </Col>
                        <Col sm={6} >
                            <h1>Samuel Egea</h1>

                            <p>DESENVOLVEDOR WEB</p>
                            <p>TÉCNICO EM ELETRÔNICA</p>
                        </Col>
                    </Row>

                    <div className="sroll-down-indicator">
                        \/
                    </div>
            </div>
        </Container>
    )
}
