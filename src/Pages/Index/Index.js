import React from 'react'
import { About } from '../About/About';
import { Hero } from '../Hero/Hero';
import { Home } from '../Home/Home';
import { Container } from './styles';


export default function Index() {
    return (
        <Container>
            <Hero />
            <Home />
        </Container>
    )
}
