import React, { Component } from 'react'
import styled from 'styled-components'
import Error from '../Error'
import Axios from 'axios'
import swal from 'sweetalert';
import X from '../../Images/x.png'
const url="http://localhost:80/react-backend/ChangePassword.php"

export class ChangePassword extends Component {

    constructor(props){
        super(props)
        console.log(this.props.UserId)
        this.state={
            isVisible: this.props.isVisible,
            userId: this.props.UserId,
            newPassword:'',
            confirmPassword:'',
            errorMessage: '',
            errorOccured: false
        }
        this.submitHandler = this.submitHandler.bind(this)
        this.onChange = this.onChange.bind(this)

    }
    componentDidMount() {
        var nameInput =  document.getElementById("nameInput")
        var nameLabel = document.getElementById("nameLabel")
        var passwordInput = document.getElementById("passwordInput")
        var passwordLabel = document.getElementById("passwordLabel")
        var closeModal = document.getElementById("closeModal")
        nameInput.addEventListener("focus", () => {
            nameLabel.style.transform = "translate(0px,-15px)"
            nameLabel.style.fontSize = "15px"
        })

        nameInput.addEventListener("blur", () => {
            if (document.getElementById("nameInput").value === "") {
                nameLabel.style.transform = "translate(0px,0px)"
                nameLabel.style.fontSize = "20px"
            }

        })
        passwordInput.addEventListener("focus", () => {
            passwordLabel.style.transform = "translate(0px,-15px)"
            passwordLabel.style.fontSize = "15px"
        })

        passwordInput.addEventListener("blur", () => {
            if (passwordInput.value === "") {
                passwordLabel.style.transform = "translate(0px,0px)"
                passwordLabel.style.fontSize = "20px"
            }
        })
        closeModal.addEventListener("click",()=>{
           
            this.props.onClose()
        })
    }
    onChange = e =>{
        this.setState({
           [ e.target.name]: e.target.value
        })

    }
    submitHandler(e){
        e.preventDefault()
        if(this.state.newPassword==="" || this.state.confirmPassword===""){
            this.setState({
                errorOccured:true,
                errorMessage:"Please enter all the required fields."
            })
        }
        if(this.state.newPassword !== this.state.confirmPassword){
            this.setState({
                errorOccured:true,
                errorMessage: "Passwords don't match."
            })
        }
        const obj={
            UserId: this.state.userId,
            NewPassword: this.state.newPassword
        }
        Axios.post(url,obj)
        .then(res=> res.data)
        .then(data=> swal(`${data}`, {
            className: "white-bg",
            closeOnClickOutside: false,
          }))
          .then(this.setState({
              newPassword:'',
              confirmPassword:''
          }))
          .then( this.props.onClose())
    }
    render() {
        if(this.state.isVisible){
            return (
                <OuterContainer>
                    <Image id="closeModal" src={X}/>
                <InnerContainer>
                      {/* <Image src={Logo} alt="Logo Image" /> */}
                <Heading>Password Change</Heading>
               
                    <FormContainer>
                        <Label id="nameLabel">New Password</Label>
                        <Input id="nameInput" name="newPassword" onChange={this.onChange} value={this.state.newPassword} type="password" />
                        <Label id="passwordLabel">Confrim Password</Label>
                        <Input id="passwordInput" onChange={this.onChange} value={this.state.confirmPassword} name="confirmPassword" type="password" />
    {this.state.errorOccured && <Error errorMessage={this.state.errorMessage}/>} 
                        <Button onClick={this.submitHandler}>Change</Button>
                    </FormContainer>
                
                </InnerContainer>
            </OuterContainer>
            )
        }
        else return (<></>)
    }
       
}

export default ChangePassword

const OuterContainer = styled.div`
    display:grid;
    grid-template-columns:100%;
    position:absolute;
    top:0;
   bottom:0;
   width:100%;
   opacity:0.98;
    place-items:center;
    background-color:white;
    z-index:100;
    height: calc(100vh - 17vh);
    @media (min-width:740px){
        height: calc(100vh - 21vh);
    }
`;
const InnerContainer = styled.div` display:grid; grid-template-columns:100%; row-gap: 10vh;text-align:center;`;
const Image = styled.img`width: 20px; height:auto; position:relative; right:-45%;cursor:pointer;`;
const Button = styled.button`

    background-color: #743c97;
    color:white;
    padding:10px 10px;
    font-size:20px;
    border: 1px solid transparent;
    outline:none;
    &:hover{
        color:#743c97;
        background-color:white;
        border:1px solid #743c97;
    }
`;
const Heading = styled.h1`
font-size: 2.4rem;
line-height: 1.33333;
font-weight: 600;
color: rgba(0,0,0,0.9);
color:#743c97;
margin:0;
padding:0;
`;
const FormContainer = styled.div`
display:grid;
grid-template-columns:100%;
grid-row-gap:15px;
position:relative;
`;
const Form = styled.form``;
const Label = styled.label`
    position:absolute;
    font-size:20px;
    padding-left:5px;
    transition: all 200ms ease-in;
    &:nth-of-type(1){
        top:13px;
        &.error{
            color:red;
        }
    }
    &:nth-of-type(2){
        top:70px;
        &.error{
            color:red;
        }
    }
    transition: all 200ms linear;
    z-index:20;
`;
const Input = styled.input`
padding: 15px 0 0 2px;
font-size:25px;
border:1px solid black;
position:relative;
z-index:1;
border:none;
border-bottom: 1px solid #743c97;
outline:none;
transition: all 200ms ease-in;
&:nth-of-type(1){
    &.error{
        border-bottom:1px solid red;
    }
}
&:nth-of-type(2){
    &.error{
        border-bottom:1px solid red;
    }
}
`;
