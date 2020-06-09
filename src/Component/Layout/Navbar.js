import React, { Component } from 'react'
import styled from 'styled-components'
import Hamburger from "../../Images/icons8-gradient-line-50.png"
import Logo from "../../Images/logo.jpg"
import { NavLink } from 'react-router-dom'

export class NavbarPage extends Component {

  componentDidMount() {

    document.getElementById("hamburgerIcon").addEventListener("click",()=>{
      document.getElementById("list").classList.toggle("active")
      document.body.classList.toggle("bodyScroll")
      const listItems  = document.getElementsByClassName("listItem")
      for(var i=0;i<listItems.length;i++){
           listItems[i].classList.toggle("fadeIn")
      }
   })
  }
  componentWillUnmount(){
    document.getElementById("list").classList.toggle("active")
    document.body.classList.remove("bodyScroll")
  }
  render() {
    return (
      <OuterContainer>
        <ImagesContainer>
          <NavLink to="/"> <Image src={Logo} alt="logo" /></NavLink>
          <HamburgerImage id="hamburgerIcon" src={Hamburger} alt="hamburgerIcn" />
        </ImagesContainer>
        <List id="list" className="inactive">
          <ListItem id="list1" className="listItem fadeOut">
            <Nav exact to="/About">About</Nav>
          </ListItem>
          <ListItem className="listItem fadeOut">
            <Nav exact to="/People">People</Nav>
          </ListItem>
          <ListItem className="listItem fadeOut">
            <Nav exact to="/Services">Services</Nav>
          </ListItem>
          <ListItem className="listItem fadeOut">
            <Nav exact to="/SampleProjects">Sample Projects</Nav>
          </ListItem>
          <ListItem className="listItem fadeOut">
            <Nav exact to='/Contact'>Contact</Nav>
          </ListItem>
          <ListItem className="listItem fadeOut">
            <Nav exact to='/Login'>Login</Nav>
          </ListItem>
        </List>
      </OuterContainer>
    )
  }
}

export default NavbarPage;

export const OuterContainer = styled.div`
    display:grid;
    grid-template-columns: 100%;
    align-items:center;
    justify-content:center;
    @media (min-width:768px){
        grid-template-columns: 30% 70%;
    }
`;
export const ImagesContainer = styled.div`
    display:grid;
    grid-template-columns: 75% 15%;
    justify-content: space-around;
    align-items: center;
    @media (min-width:740px){
        #hamburgerIcon{
            display:none;
        }
    }
`;
export const Image = styled.img`width:60%; height:auto;`;
export const HamburgerImage = styled(Image)`width:50px; height:auto;
`;
export const Nav = styled(NavLink)`
font-size:20px;
text-decoration:none;
color:#743c97;
    @media (max-width:739px){
    color:white;
}

`;
export const LogoImage = styled(Image)`
    padding: 10px 0;
    width:150px;
    height:auto;
    @media (min-width: 740px){
        width:0%;
        height:auto;
    }
`;
export const List = styled.ul`
list-style-type: none;

@media (max-width:739px){
    position:absolute;
    transition: all 800ms ease-out;
    clip-path: circle(100px at 95% -20%);
    z-index:99;
    margin:0;
    padding:0;
    bottom:0;
    width:100vw;
    height: calc(100vh - 75px);
    display: grid;
    grid-template-columns:100%;
    place-items:center;
    background-color: #743c97;
    color:white;
    font-size: 25px;  
    &.active{
        opacity:1;
        clip-path: circle(1000px at 95% 0%);
    }
}
@media (min-width:740px){
    display: grid;
    align-items:center;
    grid-template-columns: repeat(6, auto);  
}
`;
export const ListItem = styled.li`
font-size:20px;
@media (max-width:739px){
  color:white;
  z-index:99;
    &:nth-of-type(1){
        transition: all 500ms ease 0.1s;
    }
    &:nth-of-type(2){
        transition: all 500ms ease 0.2s;
    }
    &:nth-of-type(3){
        transition: all 500ms ease 0.3s;
    }
    &:nth-of-type(4){
        transition: all 500ms ease 0.4s;
    }
    &:nth-of-type(5){
        transition: all 500ms ease 0.5s;
    }
    &:nth-of-type(6){
      transition: all 1s ease 0.5s;
  }
    
    &.fadeOut{
        opacity:0; 
    }
    &.fadeIn{
        opacity:1
    }
}
margin:0;
padding:0;

@media (min-width:740px){
    color:#743c97;
    
    font-size:17px;
   width:100%;
   height:100%;
    cursor:pointer;
    &:hover{
        color:gray;
    }
}
`;
