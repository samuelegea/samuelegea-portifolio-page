import React from 'react'
import { Container } from './styles'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CallIcon from '@material-ui/icons/Call';

export default function Header() {
    return (
        <Container>
            <header className="">
                <div>
                    <a href="/">Home</a>
                </div>
 
                <div>

                    <a href="https://github.com/samuelegea" target="_blank"><GitHubIcon/></a> 
                    <a href="https://www.linkedin.com/in/samuel-egea-67479b144/" target="_blank"><LinkedInIcon/></a> 
                    <a href="https://github.com/samuelegea" target="_blank"><CallIcon/></a> 
                </div>
            </header>
        </Container>
    )
}
