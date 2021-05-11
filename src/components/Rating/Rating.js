import React from 'react'
import { Container } from './styles'

export default function Rating({rating}) {
    const component = [];

    for (let i = 0; i < 5; i++) {
        component.push(
            <span className={rating>0 ? "color" : "white"}>•</span>
        )
        if(rating>0) rating--;
        
    }
    return (
        <Container>
           {
             component  
           } 
        </Container>
    )
}
