import React, { Component } from 'react'
import styled from 'styled-components'
export class Error extends Component {
    render() {
        const {errorMessage} = this.props
        return (
                <>
                    <Message>{errorMessage}</Message>
                </>
        )
    }
}

export default Error
const Message = styled.label`
color:red;
`;

