import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Container } from './styles';
import {ReactComponent as Ballot} from "./../../assets/ballot.svg"
import {ReactComponent as Cooking} from "./../../assets/cooking.svg"
import {ReactComponent as Chess} from "./../../assets/chess.svg"
import {ReactComponent as Portfolio_SVG} from "./../../assets/portfolio.svg"

export function Portfolio() {
    return (
        <Container>
            <div className="content d-flex justify-content-center">
                <div className="w-80 mt-5">
                    <h3 id="portifolio">Portfolio</h3>

                    <p>
                        Esses são meus projetos públicos documentados, alguns ainda estão em desenvolvimento e mais estão por vir.
                    </p>
                   
                   <Row className="d-flex justify-content-center" spacing={4}>
                       <Col lg={4} md={6} className="project-card">
                           <a href="https://github.com/samuelegea/python_study" target="__blank">
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
                           <a href="https://github.com/samuelegea/chess_frontend" target="__blank">
                            <div className="d-block w-100">
                                <div className="d-flex justify-content-center">
                                    <Chess className="svg"/>
                               </div>
                                    <h5>Xadrez</h5>
                                    <p>
                                        Jogo de xadrez completo
                                    </p>
                                    <span className="cantos direito superior"></span>
                                <span className="cantos direito inferior"></span>
                                <span className="cantos esquerdo superior"></span>
                                <span className="cantos esquerdo inferior"></span>
                           </div>
                           </a>
                       </Col>
                       <Col lg={4} md={6} className="project-card">
                           <a href="https://github.com/samuelegea/Cookbook" target="__blank">
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
                       <Col lg={4} md={6} className="project-card">
                           <a href="https://github.com/samuelegea/samuelegea-portifolio-page" target="__blank">
                            <div className="d-block w-100">
                                <div className="d-flex justify-content-center">
                                    <Portfolio_SVG className="svg"/>
                               </div>
                                    <h5>Portfolio Page</h5>
                                    <p>
                                        Página que demonstra minhas habilidades com React, HTML e CSS
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
