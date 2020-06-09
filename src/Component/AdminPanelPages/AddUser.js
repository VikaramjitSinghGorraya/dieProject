import React, { Component } from 'react'
import styled from 'styled-components'
import Axios from 'axios'
import swal from 'sweetalert';
export class AddUser extends Component {
    constructor(props){
        super(props)
        this.state={
            First_Name:'',
            Last_Name:'',
            Email_Id:'',
            User_Role:'',
            User_Password:'',
            message:''
        }
        this.onChange = this.onChange.bind(this)
        this.submitHandler=this.submitHandler.bind(this)
    }
    onChange = e =>{
        this.setState({
           [ e.target.name]: e.target.value
        })

    }
    submitHandler(e){
        e.preventDefault()
        console.log(this.state.First_Name)
        if( this.state.First_Name === "" ||  this.state.Last_Name === "" || this.state.Email_Id === "" || this.state.User_Role === ""){
            swal(`Please enter the required fields.`, {
                className: "white-bg",
                closeOnClickOutside: false,
              })
              return
        }
        const obj = {
            First_Name: this.state.First_Name,
            Last_Name: this.state.Last_Name,
            Email_Id: this.state.Email_Id,
            User_Role: this.state.User_Role 
        }
        const url="http://localhost:80/react-backend/AddUser.php"

        Axios.post(url,obj)
        .then(res => res.data)
        .then(data=>  swal(`${data}`, {
            className: "white-bg",
            closeOnClickOutside: false,
          }))
        .catch(err=>(console.log(err)))

        this.setState({
            First_Name:'',
            Last_Name:'',
            Email_Id:'',
            User_Role:'',
            User_Password:''
        })
    }
    render() {
        return (
            <OuterContainer>
                 <Heading>ADD USER</Heading>
                <Form onSubmit={this.submitHandler}>
                    <Input  type="text"name="First_Name" onChange={this.onChange}  value={this.state.First_Name} placeholder="First Name"/>
                    <Input  type="text" name="Last_Name" onChange={this.onChange} value={this.state.Last_Name} placeholder="Last Name"/>
                    <Input  type="text" name="Email_Id" onChange={this.onChange} value={this.state.Email_Id} placeholder="Email Id"/>
                     <Select name="User_Role" onChange={this.onChange}>
                         <Option deafult="">      ---Role---      </Option>
                         <Option default value="Student">Student</Option>
                         <Option value="Researcher">Researcher</Option>
                         <Option value="Technician">Technician</Option>
                     </Select>
                     <Button type="submit" >ADD</Button>
                </Form>
            </OuterContainer>
        )
    }
}

export default AddUser
const OuterContainer = styled.div`
    display:grid;
    grid-template-columns:100%;
    text-align:center;
    row-gap:20px;
`;
const Form = styled.form`
    display: grid;
    grid-template-columns:100%;
    width:90%;
    margin:auto;
    row-gap:25px;
    @media (min-width:740px){
        grid-template-columns:repeat(5, 15%);
        align-items:end;
        justify-content:space-around;
    }
`;
const Select = styled.select`
text-align-last: center;
-moz-text-align-last:center;
-ms-text-align-last:center;
border:2px solid #743c97;
border-radius:10px;
outline:none;
`;
const Option = styled.option` 
text-align-last:center; 
-webkit-text-align-last:center;
-moz-text-align-last:center;
-ms-text-align-last:center`
;
const Input = styled.input`
@media (min-width:740px){
font-size:25px;
}
    padding: 15px 0 0 2px;
font-size:20px;
border:1px solid black;
position:relative;
z-index:1;
border:none;
border-bottom: 1px solid #743c97;
outline:none;
color:#743c97;
transition: all 200ms ease-in;
&::placeholder{
    color:#743c97;
    text-align:center;
}
&::focus{
 &::placeholder{
    opacity:0;
}
}
`;
const Heading = styled.h3`color:#743c97`;
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