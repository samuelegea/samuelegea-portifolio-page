import React from 'react'
import { Container } from './styles'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CallIcon from '@material-ui/icons/Call';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/logo.svg';

 
export default function Header() {
    return (
        <Container>
            {/* <header className="">
                <div>
                    <a href="/">Home</a>
                </div>
 
                <div>

                    <a href="https://github.com/samuelegea" target="_blank"><GitHubIcon/></a> 
                    <a href="https://www.linkedin.com/in/samuel-egea-67479b144/" target="_blank"><LinkedInIcon/></a> 
                    <a href='/contact' ><CallIcon/></a> 


                </div>
            </header> */}

            
            <Navbar expand="md" variant="dark" className="px-4">
                <Navbar.Brand href="#" className="">
                    <img 
                        src={logo}
                        width="104"
                        height="35"
                        className="d-inline-block align-top"
                        alt="Egea Logo"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="header-links"/>

                <Navbar.Collapse id="header-links" >
                    <div className="d-md-inline-flex d-block ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">Sobre</Nav.Link>
                        <Nav.Link href="#qualifications">Qualificações</Nav.Link>
                        <Nav.Link href="#tech">Tecnologias</Nav.Link>
                        <Nav.Link href="#portifolio">Portfolio</Nav.Link>
                        <Nav.Link href="#contact">Contato</Nav.Link>
                        <Nav.Link href="https://github.com/samuelegea" target="_blank"><GitHubIcon /></Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/samuel-egea-67479b144/" ><LinkedInIcon /></Nav.Link>
                    </div>
                </Navbar.Collapse>
            </Navbar>



        </Container>
    )
}
