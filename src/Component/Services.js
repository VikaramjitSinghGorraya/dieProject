import React from 'react'
import { Card, CardTitle, Row, CardDeck, CardText, CardBody, Container } from "reactstrap"
import NavbarPage from "../Component/Layout/Navbar";
import Footer from "../Component/Layout/Footer";
import "../Styles/services.css"
import styled from 'styled-components'


const Services = () => {

    const cardLoad = (id1, id2, id3, id4) => {
        return (
            <Container style={{margin:"2vh auto"}}>
            <Row>
                <CardDeck>
                    <Card>
                        <CardBody>
                            <CardTitle><b>{id1}</b></CardTitle>
                            <CardText>Lorem ipsum odor amet, consectetuer adipiscing elit. Feugiat facilisis maecenas scelerisque diam a faucibus. Eleifend nam rhoncus auctor sagittis justo mus nam.</CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <CardTitle><b>{id2}</b></CardTitle>
                            <CardText>Lorem ipsum odor amet, consectetuer adipiscing elit. Feugiat facilisis maecenas scelerisque diam a faucibus. Eleifend nam rhoncus auctor sagittis justo mus nam.</CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <CardTitle><b>{id3}</b></CardTitle>
                            <CardText>Lorem ipsum odor amet, consectetuer adipiscing elit. Feugiat facilisis maecenas scelerisque diam a faucibus. Eleifend nam rhoncus auctor sagittis justo mus nam.</CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <CardTitle><b>{id4}</b></CardTitle>
                            <CardText>Lorem ipsum odor amet, consectetuer adipiscing elit. Feugiat facilisis maecenas scelerisque diam a faucibus. Eleifend nam rhoncus auctor sagittis justo mus nam.</CardText>
                        </CardBody>
                    </Card>
                </CardDeck>
            </Row>
            </Container>
        )
    }

    return (
        <>
            <NavbarPage />
            <OuterContainer>
            <div style={{margin:"0 2vw"}}>
                {cardLoad("AI / ML / Deep Learning", "Automation of Systems", "Big Data Storage, Aggregation and Analytics", "Concept Validation")}
                {cardLoad("Customized Training", "Cyber Security", "Data Integration", "Digital Analytical Services")}
                {cardLoad("Drone / Autonomous Vehicle Development", "IoT Sensor Integration", "Network Analysis", "Predictive Maintenance")}
                {cardLoad("Process Optimization", "Proof of Concept", "Prototype Development", "Software Design and Project Management")}
            </div>
            </OuterContainer>
            <Footer />
            </>
            
    )
}

export default Services;

const OuterContainer = styled.div`
min-height: calc(100vh - 21vh);
`;
