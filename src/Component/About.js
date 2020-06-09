import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import AssetManagementImage from '../Images/AssetManagement.jpg'
import TimeSensitiveNetworkingImage from '../Images/TimeSensitiveNetworking.png'
import MeshNetworkImage from '../Images/MeshNetworks.jpg'
import AboutUsBackgroundImage from '../Images/background.jpg'
import NavbarPage from "../Component/Layout/Navbar";
import Footer from "../Component/Layout/Footer";
var first, second, third, fourth, fifth, sixth

export class About extends Component {
    componentDidMount() {
        first = setTimeout(() => {
            document.getElementById("questionMark").style.opacity = 1
        }, 3200)

        second = setTimeout(() => {
            document.getElementById("whatWeDoParagraph").style.opacity = 1
        }, 400)

        third = setTimeout(() => {
            document.getElementById("whatWeDoParagraph").style.color = "white"
        }, 3999)

        fourth = setTimeout(() => {
            document.getElementById("whatWeDoTextContainer").style.visibility = "visible"
        }, 4600)

        fifth = setTimeout(() => {
            document.getElementById("horizontalLine").style.opacity = 1
        }, 2000)
        sixth = setTimeout(() => {
            document.getElementById("whatWeDoContainer").style.transform = "translate(0, 0)"
        }, 3299)
    }
    componentWillUnmount() {
        clearInterval(first)
        clearInterval(second)
        clearInterval(third)
        clearInterval(fourth)
        clearInterval(fifth)
        clearInterval(sixth)
    }

    render() {
        return (
            <>
                <NavbarPage />
                <OuterContainer>
                    <WhatWeDoContainer id="whatWeDoContainer">
                        <WhatWeDoParagraph id="whatWeDoParagraph">
                            What we do<Span id="questionMark">?</Span>
                            <Hr id="horizontalLine"></Hr>
                        </WhatWeDoParagraph>
                    </WhatWeDoContainer>

                    <WhatWeDoTextContainer id="whatWeDoTextContainer">
                        <AssetManagementContainer>
                            <div>
                                <Image src={AssetManagementImage} alt="Asset Management" />
                                <Heading>
                                    Asset Management
                                </Heading>
                            </div>

                            <WhatWeDoContentParagraph>
                                In addition to traditional definitions of an asset,
                                DICE includes data as an important corporate asset.
                                By combining data acquisition, distributed analytics, edge computing,
                                mobile computing, and software technology platforms,
                                companies have access to condition monitoring, along with analysis and
                                predictive capabilities.
                            </WhatWeDoContentParagraph>
                        </AssetManagementContainer>
                        <TimeManagementContainer>
                            <div>
                                <Image src={TimeSensitiveNetworkingImage} alt="Time Sensitive Networking" />
                                <Heading>
                                    Time Sensitive Networking
                                </Heading>
                            </div>
                            <WhatWeDoContentParagraph>
                                TSN is a key component for various industrial applications such as
                                process and machine control. To be able to manage a system to create
                                low communication latency and minimal jitter are critical for closed
                                loop requirements. DICE helps to demonstrate technologies from multiple
                                companies working together on a TSN network to showcase flexible
                                manufacturing and processing scenarios.
                            </WhatWeDoContentParagraph>
                        </TimeManagementContainer>
                        <MeshNetworkingContainer>
                            <div>
                                <Image src={MeshNetworkImage} alt="Mesh Network Image" />
                                <Heading>
                                    Mesh Networks
                                </Heading>
                            </div>
                            <WhatWeDoContentParagraph>
                                A mesh refers to a rich interconnection among smart devices or nodes
                                consisting of mesh clients, mesh routers and gateways in a relatively
                                stable topology. DICE focuses on open technologies that can help
                                monitor and control mesh networks at the cloud edge,
                                while maintaining scalability and interoperability between different
                                vendors and protocol standards. This allows companies to increase
                                resiliency and make integration of distributed resources easier.
                            </WhatWeDoContentParagraph>
                        </MeshNetworkingContainer>
                    </WhatWeDoTextContainer>
                </OuterContainer>
                <Footer />
            </>
        )
    }
}

export default About

/*Defining general Components used in the page*/
const Paragraph = styled.p``;
const Div = styled.div``;
const Heading = styled.h2``;

/*Defining Animations*/
const whatWeDoContainerMoveToTop = keyframes`
    from{
            
        transform: translate(0, 25%);
    }
    to{
        transform: translate(0, 0);

    }
`;
const textDisplay = keyframes`
    from{
        visibility: hidden;
        opacity:0;
    }
    to{
        visibility: visible;
        opacity:1;
    }
`;
const textAnimation = keyframes`
    0%{
        opacity:0;
    }
    25%{
        opacity:0.25;
    }
    50%{
        opacity:0.5;
    }
    75%{
        opacity:0.75;
    }
    100%{
        opacity:1;
    }
`;
const horizontalAnimation = keyframes`
    from{
        width:90%;
        opacity:0;
    }
    to{
        width:120px;
        opacity:1;
    }
`;

/* Styling the General Components declared above*/

/**The Outermost div containing all the components */
const OuterContainer = styled(Div)`
    text-align:center;
    
`;

/**The div containing What We Do heading */
const WhatWeDoContainer = styled(Div)`
    position:relative;
    bottom:0;
    transform: translate(0, 25%);
    background-image:url(${AboutUsBackgroundImage});
    background-size: cover;
    background-attachment:fixed;
    background-repeat: no-repeat;
    min-height: 350px;
    display:grid;
    grid-template-columns:100%;
    place-items:center;
    text-align:center;
    animation: ${whatWeDoContainerMoveToTop} 500ms linear 3233ms;

    //Media Query for desktop. The style will be applied when width of screen is 740px or more

    @media (min-width: 740px){
        min-height: 300px;
        background-size:cover;
        width:95vw;
        margin:auto;
        border-radius:20px;
    }
`;

/**Div containing the headings Asset Managemnt, Time sensitive networking and Mesh networks */
const WhatWeDoTextContainer = styled(Div)`
    padding: 50px 10px;
    animation: ${textDisplay} 600ms linear 4300ms;
    visibility:hidden;
    @media (min-width:740px){
        display:grid;
        grid-template-columns: 80%;
        grid-row-gap: 50px;
        justify-content:space-around;
    }
`;

const Hr = styled.hr`
border: 1px solid white;
    width: 120px;
    margin: auto;
    opacity:0;
    animation: ${horizontalAnimation} 500ms linear 1500ms;
`;
const WhatWeDoParagraph = styled(Paragraph)`
text-align:left;
    opacity:0;
    font-size: 40px;
    font-weight:bold;
   color:black;
   animation: ${textAnimation} 2000ms linear;
   @media (min-width:740px){
       font-size: 70px;
   }
`;
const AssetManagementContainer = styled(Div)`
   p{
       text-align:left;
   }
    @media (min-width:740px){
        display:grid;
        grid-template-columns: 40% 40%;
        place-items:Center;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
        border-radius: 20px;
        padding: 10px 0;
}`;
const TimeManagementContainer = styled(Div)` 
p{
    text-align:left;
}
@media (min-width:740px){
    display:grid;
    grid-template-columns: 40% 40%;
    place-items:Center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    padding: 10px 0;`;
const MeshNetworkingContainer = styled(Div)`
p{
    text-align:left;
}
 @media (min-width:740px){    
    display:grid;
    grid-template-columns: 40% 40%;
    place-items:Center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    padding: 10px 0;`;
const WhatWeDoContentParagraph = styled(Paragraph)`
    font-size:17px;
    line-height: 28px;
    font-weight:300;
    color:#743c97;
`;
const Span = styled.span`
opacity:0`;
const Image = styled.img`
    width:200px;
    height:200px;
    background-size:contain;
`;
