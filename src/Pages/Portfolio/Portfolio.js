import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Container } from './styles';
import {ReactComponent as Ballot} from "./../../assets/ballot.svg"
import {ReactComponent as Cooking} from "./../../assets/cooking.svg"
import {ReactComponent as Chess} from "./../../assets/chess.svg"

export function Portfolio() {
    return (
        <Container>
            <div className="content d-flex">
                <div className="w-100 mt-5">
                    <h3>Portfolio</h3>

                    <p>
                        Esses são meus projetos públicos documentados, alguns ainda estão em desenvolvimento e mais estão por vir.
                    </p>
                   
                   <Row className="d-flex justify-content-center">
                       <Col lg={4} md={6} className="project-card">
                           <a href="" >
                                <div className="d-block w-100">
                                    <div className="d-flex justify-content-center">
                                        <Ballot className="svg"/>
                                    </div>
                                        <h5>Pooling App</h5>
                                        <p>
                                            Aplicação para votações
                                        </p>
                                <span className="cantos direito superior"></span>
                                <span className="cantos direito inferior"></span>
                                <span className="cantos esquerdo superior"></span>
                                <span className="cantos esquerdo inferior"></span>
                                </div>

                           </a>
                       </Col>
                       <Col lg={4} md={6} className="project-card">
                           <a href="" >
                            <div className="d-block w-100">
                                <div className="d-flex justify-content-center">
                                    <Chess className="svg"/>
                               </div>
                                    <h5>Xadrez</h5>
                                    <p>
                                        Jogo de xadrez completo Offline
                                    </p>
                                    <span className="cantos direito superior"></span>
                                <span className="cantos direito inferior"></span>
                                <span className="cantos esquerdo superior"></span>
                                <span className="cantos esquerdo inferior"></span>
                           </div>
                           </a>
                       </Col>
                       <Col lg={4} md={6} className="project-card">
                           <a href="" >
                            <div className="d-block w-100">
                                <div className="d-flex justify-content-center">
                                    <Cooking className="svg"/>
                               </div>
                                    <h5>CookBook</h5>
                                    <p>
                                    Ache as receitas de tudo que precisar, seja um iniciante ou um grande mestre
                                    </p>
                                    <span className="cantos direito superior"></span>
                                <span className="cantos direito inferior"></span>
                                <span className="cantos esquerdo superior"></span>
                                <span className="cantos esquerdo inferior"></span>
                           </div>
                           </a>
                       </Col>
                   </Row>
                </div>
            </div>
        </Container>
    )
}
