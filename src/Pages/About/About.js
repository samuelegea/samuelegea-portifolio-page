import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Container } from './styles';
import code_typing_bro from "./../../assets/Code typing-bro (1).svg"
import programming_bro from "./../../assets/Programming-bro.svg"

export function About() {
    return (
        <Container>
            <div className="content">
                <div className="w-100 mt-5">
                    <Row >
                        <Col lg={6} >
                            <div className="d-flex justify-content-center">
                                <div className="d-block w-80">
                                    <h3>Sobre</h3>

                                    <p className="">
                                    Sou técnico em eletrônica, atualmente cursando Engenharia Mecatrônica, estudante autodidata em programação WEB e entusiasta da comunidade maker, principalmente da área de impressão 3D.
                                    Esta página é um resumo das minhas qualificações profissionais e um portfolio para demonstrar o que eu sou capaz de produzir.

                                    </p>

                                    <img 
                                        src={programming_bro}
                                        height="500"
                                        width="500"
                                        className="image"
                                    />
                                </div>
                            </div>
                            
                        </Col>
                        <Col lg={6} >
                            <div className="d-block">

                                <Row lg={{order:2}} className="justify-content-center">
                                    <p className="w-80 quote">
                                        “O importante é manter a mente quieta, a espinha ereta e o coração tranquilo.”
                                    </p>
                                    <p className="w-80 justify-right">
                                    - Walter Franco
                                    </p>
                                </Row>

                                <Row lg={{order:1}} className="d-flex justify-content-center">
                                    <img 
                                        src={code_typing_bro}
                                        height="400"
                                        width="400"
                                        className="image"
                                    />
                                </Row>

                                

                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    )
}
