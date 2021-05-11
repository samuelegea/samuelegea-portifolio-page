import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Container } from './styles';
import nerd_amico from "./../../assets/Nerd-amico.svg"

export function Qualifications() {
    return (
        <Container>
            <div className="content d-flex">
                <div className="w-100 mt-5">
                    <Row >
                        <Col lg={6} >
                            <div className="d-flex justify-content-center">
                                <div className="d-block">
                                    <h3>Qualificações</h3>
                                    <br />
                                    <h5>Graduações</h5>
                                    <ul className="w-80">
                                        <li>
                                            Engenharia Mecatrônica - Cursando
                                        </li>
                                        <li>
                                            Técnico em Eletrônica - Completo
                                        </li>
                                    </ul>

                                    <img 
                                        src={nerd_amico}
                                        height="500"
                                        width="500"
                                        className="image"
                                    />
                                </div>
                            </div>
                            
                        </Col>
                        <Col lg={6} >
                        <div className="d-flex justify-content-center">
                                <div className="d-block">
                                    <br />
                                    <br />
                                    <br />
                                    <h5>Cursos e Workshops</h5>
                                    <ul className="w-80">
                                        
                                        <li>
                                            NLW#3 - RocketSeat - Trilha de Flutter e React

                                        </li>
                                        <li>
                                        Semana Omnistack #8 - RocketSeat

                                        </li>
                                        <li>
                                        Curso Completo de Desenvolvimento WEB 2018 - Jorge Sant Ana - Udemy

                                        </li>
                                        <li>
                                        Free WebDesign Course 2020: Introduction to WebDesign - Ran Segall

                                        </li>
                                        <li>
                                        Ruby on Rails Tutorial - Learn Web Development with Ruby on Rails - Michael Hartl Book

                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    )
}
