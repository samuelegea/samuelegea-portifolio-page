import React from 'react';
import { Container } from './styles';
import { Grid, Paper } from '@material-ui/core';
import avatar from './../../assets/avatar.jpg';
import coding from './../../assets/coding.png';
import analytics from './../../assets/analytics.png';
import soldering_iron from './../../assets/soldering-iron.png';

export default function Home() {
    return (
        <Container>
            <Grid container direction="row" justify="center" spacing={2} alignItems="center">

                <Grid container
                    item
                    spacing={1}
                    direction="row-reverse"
                    justify="center"
                    alignItems="center">
                    <Grid item sm={6} xs={12}>
                        {/* breve descrição sobre mim */}

                        <h3>Qum sou eu?</h3>

                        <p>
                            Meu nome é <strong>Samuel Luis Buranelo Egea</strong>, Técnico em eletrônica, graduando em Engenharia Mecatrônica, estudante
                            autodidata em programação WEB e entusiasta em impressão 3D e da comunidade maker.
                        </p>
                        <p>
                            Esta página é um resumo das minhas qualificações profissionais e um portfolio para demonstrar o que eu
                            sou capaz de produzir, além de mostrar meus interesses, sempre lembrando que o mais importante é o aprendizado e a jornada.
                        </p>
                    </Grid>
                    <Grid className="d-flex" item sm={6} xs={12}>
                        {/* aqui vai ficar meu avatar */}
                        <img className="avatar" src={avatar} alt="Samuel Egea" width="300" height="300" />
                    </Grid>
                    {/* <Grid item xm={6}></Grid> */}
                </Grid>
                <div className="full-width color-dark center-text">
                    <h3 className="white">Principais áreas de atuação</h3>
                    <Grid container direction="row" justify="center" spacing={2} alignItems="center" >
                            <Grid container item sm={4} xs={12} className="d-block">
                                <img src={coding} alt="programação" className="icon"/>
                                <div className="d-flex">
                                    <caption>Programação</caption>
                                </div>
                            </Grid>

                            <Grid container item sm={4} xs={12} className="d-block">
                                <img src={soldering_iron} alt="programação" className="icon"/>
                                <div className="d-flex">
                                    <caption>Eletrônica</caption>
                                </div>
                            </Grid>

                            <Grid container item sm={4} xs={12} className="d-block">
                                <img src={analytics} alt="programação" className="icon"/>
                                <div className="d-flex">
                                    <caption>Projetos</caption>
                                </div>
                            </Grid>
                    </Grid>
                </div>
            </Grid>
        </Container>
    )
}
