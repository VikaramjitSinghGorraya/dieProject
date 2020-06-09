import React, { Component } from 'react'
import styled from 'styled-components'
export class Loader extends Component {
    render() {
        return (
            <OuterContainer className="loader center">
            <Icon className="fa fa-cog fa-spin" />
             </OuterContainer>
        )
    }
}

export default Loader
const OuterContainer = styled.div`
@media (min-width:740px){
    width: 20%;
    max-width: 130px;
}
    margin: auto;
  width: 20%;
  max-width: 400px;
  min-width: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
`;
const Icon = styled.i`
font-size: 100px;
color:#743c97;
`;