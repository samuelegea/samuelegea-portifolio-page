import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Container } from './styles';
import mention_bro from "./../../assets/Mention-bro.svg"


export function Contact() {
    return (
        <Container>
            <div className="content d-flex justify-content-center">
                <div className="w-80 mt-5">
                    <Row>
                        <Col md={6}>
                            <h3 id="contact">Contato</h3>
                            <br/>
                            <br/>
                            <p>
                            Caso haja interesse em entrar em contato comigo, me envie um email ou mensagem no linkedin:
                            </p>

                            <br/>
                            <p>
                                <a href="mailto:samuelegea@hotmail.com">samuelegea@hotmail.com</a>
                                <br/>
                                <a href="https://www.linkedin.com/in/samuel-egea-67479b144/">Meu Perfil no Linkedin</a>
                            </p>
                        </Col>

                        <Col md={6}>
                            <div className="w-100 d-flex justify-content-center">
                                <img 
                                    src={mention_bro}
                                    height="500"
                                    width="500"
                                    className="image"
                                />
                            </div>
                        </Col>
                    </Row>
                   
                </div>
            </div>
        </Container>
    )
}
