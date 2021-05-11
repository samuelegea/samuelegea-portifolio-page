import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Container } from './styles';
import avatar from './../../assets/avatar.jpg'
import { About } from '../About/About';
import { Qualifications } from '../Qualifications/Qualifications';
import { Technologies } from '../Technologies/Technologies';
import code_typing_pana from "./../../assets/Code typing-pana.svg"
import { Portfolio } from '../Portfolio/Portfolio';
import { Contact } from '../Contact/Contact';

export function Home() {
    return (
        <Container>
            <About />
            <Qualifications />
            <Technologies />
            <div className="w-100 d-flex justify-content-center">
                <img 
                    src={code_typing_pana}
                    height="800"
                    width="800"
                    className="image"
                />
            </div>
            <Portfolio />
            <Contact />
        </Container>
    )
}
