import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import NavbarPage from "../Component/Layout/Navbar";
import Footer from "../Component/Layout/Footer";
import {NavLink} from 'react-router-dom'
var first, second, third, fourth, fifth, sixth

export class Home extends Component {
    componentDidMount() {
        first = setTimeout(() => {
            document.getElementById("firstParagraph").style.opacity = 1
        }, 1199)
        second = setTimeout(() => {
            document.getElementById("secondParagraph").style.opacity = 1
        }, 1700)
        third = setTimeout(() => {
            document.getElementById("thirdParagraph").style.opacity = 1
        }, 2599)

        fourth = setTimeout(() => {
            document.getElementById("paragraphContainer").style.top = "-10px"
        }, 2200)

        fifth = setTimeout(() => {
            document.getElementById("learnMoreButton").style.opacity = 1
        }, 3699)
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
                    <ParagraphContainer id="paragraphContainer">
                        <Paragraph id="firstParagraph">
                            Data stewardship is key to the services that we.
                        </Paragraph>
                        <Paragraph id="secondParagraph">
                            DICE uses AI and ML techniques to obtain
                        </Paragraph>
                        <Paragraph id="thirdParagraph">
                            patterns that exist in the data.
                        </Paragraph>
                        <NavLink to="About"><LearnMoreButton id="learnMoreButton">Learn More</LearnMoreButton></NavLink>
                    </ParagraphContainer>
                </OuterContainer>
                <Footer />
            </>
        )
    }
}

export default Home

const Button = styled.button``;
const learnMoreButtonOpacity = keyframes`
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
const paragraphContainerToTop = keyframes`
    from{
        top:10px;
    }
    to{
        top:-10px;
    }
`;
const paragraphOpacity = keyframes`
    0%{
        opacity:0;
    }
    25%{
        opacity:0.5;
    }
    50%{
        opacity:1;
    }
    100%{
        opacity:1;
    }
`;
const Div = styled.div``;
const OuterContainer = styled(Div)`
    display:grid;
    grid-template-columns:100%;
    align-items:center;
    justify-content:center;
    text-align:center;
    height: calc(100vh - 17vh);
    position:relative;
    @media (min-width:740px){
        height: calc(100vh - 21vh);
    }
`;
const ParagraphContainer = styled(Div)`
    position:relative;
    top:10px;
    padding: 0 5px;
    animation: ${paragraphContainerToTop} 900ms linear 2100ms;
`;
const Paragraph = styled.p`

color:#743c97;
    margin:0;
    font-size:18px;
    &:nth-of-type(1){
        opacity:0;
        animation: ${paragraphOpacity} 900ms linear 300ms;
    }
    &:nth-of-type(2){
        opacity:0;
        animation: ${paragraphOpacity} 900ms linear 899ms
    }
    &:nth-of-type(3){
        opacity:0;
        animation: ${paragraphOpacity} 900ms linear 1699ms
    }
    @media (min-width:740px){
        font-size: 30px;
    }
`;
const LearnMoreButton = styled(Button)`
    opacity:0;
    background-color: #743c97;
    color:white;
    animation: ${learnMoreButtonOpacity} 700ms linear 3200ms;
    padding:10px 10px;
    height:60px;
    width:160px;
    margin-top: 40px;
    font-size:25px;
    outline:none;
    &:hover{
        color:#743c97;
        background-color:white;
        border:1px solid #743c97;
    }
    @media (min-width:740px){
        width: 200px;
        height:60px;
        cursor:pointer;
        border: none;
        outline:none;
    }
`;