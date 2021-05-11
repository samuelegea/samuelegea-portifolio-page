import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Container } from './styles';
import nerd_amico from "./../../assets/Nerd-amico.svg"
import Rating from '../../components/Rating/Rating';

export function Technologies() {
    return (
        <Container>
            <div className="content d-flex">
                <div className="w-100 mt-5">
                    <h3>Tecnologias</h3>

                    <p>
                        Essas são tecnologias que eu conheço e já implementei, seguida do meu nível de proeficiência e meus interesses de estudo atuais.
                    </p>
                    <Row className="mt-3">
                        <Col lg={4} >
                                <div className="d-block">
                                    <br />
                                    <h5>Linguagens</h5>
                                    
                                    <ul className="w-80">
                                        <div className="d-flex justify-content-between h-2em align-items-center">
                                            <li >Linguagem C</li>
                                            <Rating rating={5} />
                                        </div>
                                        <div className="d-flex justify-content-between h-2em align-items-center">
                                            <li >Linguagem Ruby</li>
                                            <Rating rating={4} />
                                        </div>
                                        <div className="d-flex justify-content-between h-2em align-items-center">
                                            <li >Linguagem JavaScript</li>
                                            <Rating rating={4} />
                                        </div>
                                        <div className="d-flex justify-content-between h-2em align-items-center">
                                            <li >Linguagem Python</li>
                                            <Rating rating={4} />
                                        </div>
                                        <div className="d-flex justify-content-between h-2em align-items-center">
                                            <li >Linguagem PHP</li>
                                            <Rating rating={3} />
                                        </div>
                                        <div className="d-flex justify-content-between h-2em align-items-center">
                                            <li >Linguagem Java</li>
                                            <Rating rating={3} />
                                        </div>
                                    </ul>

                                    <br />
                                    <h5>Frameworks</h5>

                                    <ul className="w-80">
                                        <div className="d-flex justify-content-between h-2em align-items-center">
                                            <li >Ruby on Rails</li>
                                            <Rating rating={5} />
                                        </div>
                                        <div className="d-flex justify-content-between h-2em align-items-center">
                                            <li >ReactJS</li>
                                            <Rating rating={4} />
                                        </div>
                                        <div className="d-flex justify-content-between h-2em align-items-center">
                                            <li >NodeJSt</li>
                                            <Rating rating={3} />
                                        </div>
                                        <div className="d-flex justify-content-between h-2em align-items-center">
                                            <li >Django</li>
                                            <Rating rating={3} />
                                        </div>
                                        <div className="d-flex justify-content-between h-2em align-items-center">
                                            <li >BootStrap</li>
                                            <Rating rating={5} />
                                        </div>
                                        <div className="d-flex justify-content-between h-2em align-items-center">
                                            <li >MaterialUI</li>
                                            <Rating rating={4} />
                                        </div>
                                    </ul>

                                    
                                </div>
                            
                        </Col>
                        <Col lg={4} >
                                <div className="d-block">
                                    <br />
                                    <h5>Outras Tecnologias</h5>
                                    
                                    <ul className="w-80">
                                        <div className="d-flex justify-content-between h-2em align-items-center">
                                            <li >AWS</li>
                                            <Rating rating={3} />
                                        </div>
                                        <div className="d-flex justify-content-between h-2em align-items-center">
                                            <li >GraphQL</li>
                                            <Rating rating={3} />
                                        </div>
                                        <div className="d-flex justify-content-between h-2em align-items-center">
                                            <li >Amazon S3</li>
                                            <Rating rating={4} />
                                        </div>
                                        <div className="d-flex justify-content-between h-2em align-items-center">
                                            <li >Git</li>
                                            <Rating rating={4} />
                                        </div>
                                        <div className="d-flex justify-content-between h-2em align-items-center">
                                            <li >HTML 5</li>
                                            <Rating rating={5} />
                                        </div>
                                        <div className="d-flex justify-content-between h-2em align-items-center">
                                            <li >CSS</li>
                                            <Rating rating={4} />
                                        </div>
                                        <div className="d-flex justify-content-between h-2em align-items-center">
                                            <li >VHDL</li>
                                            <Rating rating={4} />
                                        </div>
                                        <div className="d-flex justify-content-between h-2em align-items-center">
                                            <li >Assembly</li>
                                            <Rating rating={3} />
                                        </div>
                                        <div className="d-flex justify-content-between h-2em align-items-center">
                                            <li >SQL - PostgreSQL</li>
                                            <Rating rating={4} />
                                        </div>
                                        <div className="d-flex justify-content-between h-2em align-items-center">
                                            <li >NoSQL - MongoDB</li>
                                            <Rating rating={4} />
                                        </div>
                                        <div className="d-flex justify-content-between h-2em align-items-center">
                                            <li >Figma</li>
                                            <Rating rating={4} />
                                        </div>
                                        <div className="d-flex justify-content-between h-2em align-items-center">
                                            <li >AdobeXD</li>
                                            <Rating rating={4} />
                                        </div>
                                    </ul>
                                        

                                </div>
                        </Col>

                        <Col lg={4} >
                        <div className="d-flex justify-content-center">
                                <div className="d-block w-100">
                                    <br />
                                    <h5>Interesses atuais</h5>
                                    
                                    <ul className="w-80">
                                        <li>Firebase</li>
                                        <li>Electron</li>
                                        <li>Flutter</li>
                                        <li>Elixir</li>
                                        <li>TypeScript</li>
                                        <li>Machine Learning</li>
                                        <li>BlitsJS</li>
                                        <li>ThreeJS</li>
                                        <li>React Native</li>
                                        <li>NodeJS</li>
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
