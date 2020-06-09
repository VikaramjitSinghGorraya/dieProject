import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import NavbarPage from "../Component/Layout/Navbar";

export class Contact extends Component {
    render() {
        return (
            <>
                <NavbarPage />
                <OuterContainer>
                    <GoogleMapContainer>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.514800033615!2d-106.67157368478955!3d52.143146979744564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f6d6cbe6fd4b%3A0x4dcd9cda23174c1d!2sSaskatchewan%20Polytechnic%2C%20Saskatoon%20Campus!5e0!3m2!1sen!2sca!4v1589940523699!5m2!1sen!2sca" frameborder="0" style={{ border: 0, width: "100vw", height: "270px", padding:"0" }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </GoogleMapContainer>
                    <LetsTalkContainer>
                        <LetsTalkHeading>
                            LET'S <Span>TALK</Span>
                        </LetsTalkHeading>
                       
                        <SocialMediaContainer>
                            <AddressContainer>
                                <SocialMediaHeadings>
                                    Our HQ
                            </SocialMediaHeadings>
                                <Address>
                                    Saskatchewan Polytechnic Administrative Offices<br />
                                400 - 119 4th Avenue South<br />
                                Saskatoon SK  S7K 5X2
                            </Address>
                            </AddressContainer>
                            <SocialLinksContainer>
                                <SocialMediaHeadings>
                                    Social
                            </SocialMediaHeadings>
                                <div>
                                    <FacebookIcon className="fa fa-facebook-square fa-3x" aria-hidden="true" />
                                    <TwitterIcon className="fa fa-twitter-square fa-3x" aria-hidden="true" />
                                    <InstagramIcon className="fa fa-instagram fa-3x" aria-hidden="true" />
                                </div>
                            </SocialLinksContainer>
                        </SocialMediaContainer>
                    </LetsTalkContainer>
                </OuterContainer>
            </>
        )
    }
}

export default Contact

const Div = styled.div` 
`;
const OuterContainer = styled(Div)`
    display:grid;
    grid-template-columns: 100%;
    grid-row-gap: 130px;
    overflow:hidden;
`;
const GoogleMapContainer = styled(Div)`
`;
const LetsTalkContainer = styled(Div)`
    text-align:center;
`;
const LetsTalkHeading = styled.h2`
    color:#743c97;
    font-weight:200;
`;

const SocialMediaContainer = styled(Div)`
text-align:center;
@media (min-width:740px){
    display:grid;
    grid-template-columns: 40% 40%;
    justify-content:space-around;
    padding: 0 0 10px 0;
}
`;
const AddressContainer = styled(Div)`

`;
const SocialMediaHeadings = styled.h3`
color:#743c97;
`;
const Address = styled.address``;
const SocialLinksContainer = styled(Div)`

`;
const Icon = styled.i`
    margin-left: 10px;
`;
const FacebookIcon = styled(Icon)`
    color:#3B5998;
    
`;
const TwitterIcon = styled(Icon)`
    color:#55ACEE;
`;
const InstagramIcon = styled(Icon)`
    color: #f09433;
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`;
const Span = styled.span`
    font-weight:800;
`;





