import React, { useState } from 'react'
import NavbarPage from "../Component/Layout/Navbar";
import Footer from "../Component/Layout/Footer";
import { Card, Container, CardImg, CardTitle, CardText, Row } from 'reactstrap';
import styled from 'styled-components'

const People = () => {

    const [users, setUsers] = useState([
        { name: " Gerelt Trost", title: "Research Coordinator", image: require("../Images/GereltT.jpg") },
        { name: " Kelvin Boechler", title: "Senior Research Associate", image: require("../Images/kelvin-boechler.png") },
        { name: " Cyril Coupal", title: "Senior Research Associate", image: require("../Images/cyril-coupal.png") },
        { name: " Richard Dosselman", title: "Senior Research Associate", image: "//joeschmoe.io/api/v1/jon" },
    ]);

    const [partTime, setPart] = useState([
        { name: " Wade Lahoda", title: "Senior Research Associate", image: "//joeschmoe.io/api/v1/jon" },
        { name: " Tanya Lung", title: "Senior Research Associate", image: "//joeschmoe.io/api/v1/jess" },
        { name: " Colleen Patterson", title: "Senior Research Associate", image: "//joeschmoe.io/api/v1/jon" },
        { name: " William Topping", title: "Senior Research Associate", image: "//joeschmoe.io/api/v1/jon" },
    ]);

    const [Technician, setTech] = useState([
        { name: " Brian Dyck", title: "Research Technician", image: "//joeschmoe.io/api/v1/jon" },
        { name: " Tessa Herzberger", title: "Research Technician", image: "//joeschmoe.io/api/v1/jess" },
        { name: " Luke MacNeil", title: "Research Technician", image: "//joeschmoe.io/api/v1/jon" },
        { name: " Shahrzad Najafabadi", title: "Research Technician", image: "//joeschmoe.io/api/v1/jon" },
        { name: " Jacob Peckham", title: "Research Technician", image: "//joeschmoe.io/api/v1/jon" },
        { name: " Mathew Thompson", title: "Research Technician", image: "//joeschmoe.io/api/v1/jon" },
    ]);

    const peopleLoad = (name, image, title) => {
        return (
            <Card style={{ width: "200px", height: "auto", margin: "2vh auto" }}>
                <CardImg src={image} />
                <CardTitle><b>{name}</b></CardTitle>
                <CardText><i>{title}</i></CardText>
            </Card>
        );
    }

    return (
        <>
            <NavbarPage />
            <Container>
                <OuterContainer>
                    <div>
                        <Row>
                            {peopleLoad("Dr. Terry Peckham", require("../Images/terrypeckham.png"), "Research Chair")}
                        </Row>
                        <Row>
                            {users.map((user) => (
                                peopleLoad(user.name, user.image, user.title)
                            ))}
                        </Row>
                        <Row>
                            {partTime.map((partTime) => (
                                peopleLoad(partTime.name, partTime.image, partTime.title)
                            ))}
                        </Row>
                        <Row>
                            {Technician.map((Technician) => (
                                peopleLoad(Technician.name, Technician.image, Technician.title)
                            ))}
                        </Row>
                    </div>

                </OuterContainer>
            </Container>
            <Footer />
        </>
    )
}

export default People

const OuterContainer = styled.div`
display:grid;
grid-template-columns:100%;
justify-content:center;
align-items:center;
text-align:center;
`;
