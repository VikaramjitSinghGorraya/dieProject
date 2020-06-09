import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export class Footer extends Component {
    render() {
        return (
            <OuterContainer>
                <HorizontalLine />
                <AboutAndContactUsContainer>
                    <Paragraph>Follow Us</Paragraph>
                </AboutAndContactUsContainer>
                <SocialMediaLinksContainer>
                    <a href="https://www.facebook.com/pg/saskpolytech/posts/" target="_blank"><Icon className="fa fa-facebook-square fa-3x" aria-hidden="true" /></a>
                    <a href="https://twitter.com/SaskPolytech" target="_blank"><Icon className="fa fa-twitter-square fa-3x" aria-hidden="true" /></a>
                    <a href="https://www.instagram.com/SaskPolytech/" target="_blank"><Icon className="fa fa-instagram fa-3x" aria-hidden="true" /></a>
                </SocialMediaLinksContainer>
                <AllRightsReservedContainer>
                    <Paragraph>© 2020 DICE. All Rights Reserved.</Paragraph>
                </AllRightsReservedContainer>
            </OuterContainer>
        )
    }
}

export default Footer

export const Nav = styled(NavLink)`
text-decoration:none;
color:#743c97;
    @media (max-width:739px){
    color:white;
}`;
export const AllRightsReservedContainer = styled.div`
    margin-top:10px;
    padding-bottom:10px;
`;
export const HorizontalLine = styled.hr`
border: 0.5px solid #743c97;
width:70vw;
`;
export const OuterContainer = styled.div`
position:relative;
z-index:2;
bottom:0;
    height:150px;
    display:grid;
    grid-template-columns:100%;
    text-align:center;
    color:#743c97;
`;
export const AboutAndContactUsContainer = styled.div`
    display:grid;
    grid-template-columns: 100%;
    justify-content:center;
    align-items:center;
    @media (min-width:740px){
        text-align:center;
    }
`;
export const Paragraph = styled.p`font-size:25px;`;
export const SocialMediaLinksContainer = styled.div`
    display:grid;
    grid-template-columns:repeat(3,20%);
    justify-content:center;

    @media (min-width:740px){
        grid-template-columns:repeat(3,8%);
    }
`;
export const Icon = styled.i`
    margin-left: 10px;
    font-size: 40px;
    &:nth-of-type(1){
        color:#743c97;
    }
    &:nth-of-type(2){
        color:#743c97;
    }
    &:nth-of-type(3){
        color:#743c97;
    }
`;