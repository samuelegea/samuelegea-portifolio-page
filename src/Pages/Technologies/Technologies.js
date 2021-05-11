import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Container } from './styles';
import nerd_amico from "./../../assets/Nerd-amico.svg"
import Rating from '../../Components/Rating/Rating';

export function Technologies() {
    return (
        <Container>
            <div className="content d-flex justify-content-center">
                <div className="w-80 mt-5">
                    <h3 id="technologies">Tecnologias</h3>

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
                                            <li >Ruby</li>
                                            <Rating rating={4} />
                                        </div>
                                        <div className="d-flex justify-content-between h-2em align-items-center">
                                            <li >JavaScript</li>
                                            <Rating rating={4} />
                                        </div>
                                        <div className="d-flex justify-content-between h-2em align-items-center">
                                            <li >Python</li>
                                            <Rating rating={4} />
                                        </div>
                                        <div className="d-flex justify-content-between h-2em align-items-center">
                                            <li >PHP</li>
                                            <Rating rating={3} />
                                        </div>
                                        <div className="d-flex justify-content-between h-2em align-items-center">
                                            <li >Java</li>
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
                                            <li >NodeJS</li>
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
                                            <li >PostgreSQL</li>
                                            <Rating rating={4} />
                                        </div>
                                        <div className="d-flex justify-content-between h-2em align-items-center">
                                            <li >MongoDB</li>
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
                                    <div className="d-flex justify-content-center">
                                        <h5 className="w-80">Interesses atuais</h5>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <ul className="w-80">
                                            <li className="h-2em">Firebase</li>
                                            <li className="h-2em">Electron</li>
                                            <li className="h-2em">Flutter</li>
                                            <li className="h-2em">Elixir</li>
                                            <li className="h-2em">TypeScript</li>
                                            <li className="h-2em">Machine Learning</li>
                                            <li className="h-2em">BlitsJS</li>
                                            <li className="h-2em">ThreeJS</li>
                                            <li className="h-2em">React Native</li>
                                            <li className="h-2em">NodeJS</li>
                                        </ul>
                                    </div>
                                        


                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    )
}
