import React, { Component } from 'react'
import styled from 'styled-components'
import Axios from 'axios';
import AddUser from '../Component/AdminPanelPages/AddUser'
import User from '../Images/User.svg'
import Project from '../Images/Project.svg'
import Tables from '../Images/Tables.svg'
import ViewUser from './AdminPanelPages/ViewUsers'
import AddProject from './AdminPanelPages/AddProject'
import { Redirect } from 'react-router-dom'
import Login from '../Component/Login'
export class Admin extends Component {
    constructor(props){
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = true
        if(token === null){loggedIn=false}
        this.state = {
            tableData:'false',
            dropDownData:'false',
            viewUsers:false,
            addUser: false,
            addProject: false,
            redirect:false
        }
    }
   
     getUserTableData () {
        const url="http://localhost:80/react-backend/Admin.php"
        Axios.get(url)
       .then(res=>res.data)
       .then(data=>this.setState({tableData: data}))
    }
   
    componentDidMount(){
        if(sessionStorage.getItem('userData')){
            document.getElementById("add").addEventListener("click",()=>{
                this.setState({
                    addUser: true,
                    viewUser: false,
                    addProject: false
                })
            })
            document.getElementById("project").addEventListener("click",()=>{
                this.setState({
                    viewUser: false,
                    addUser:false,
                    addProject:true
                })
            })
            document.getElementById("tables").addEventListener("click",()=>{
                this.setState({
                    viewUser: true,
                    addUser:false,
                    addProject:false
                })
            })
        }
        else{
            this.setState({
                redirect:true
            })
        }
        
    }
    render() {
        if(this.state.redirect){
            return <Redirect to='/login/'/>
                    }
        return (
            <OuterContainer>
                <NavBar>
                   <Para>Welcome</Para>
                </NavBar>
                <OptionsContainer>
                    <Option>
                        <Image id="add" src={User}/>
                        Add/Delete User
                        </Option>
                    <Option>
                    <Image id="project" src={Project}/>
                        Add/Delete Project
                    </Option>
                    <Option>
                        <Image id="tables" src={Tables}/>
                        Tables
                        </Option>
                </OptionsContainer>
                    <AddUserContainer>
                    {this.state.addUser && <AddUser/>}
                    </AddUserContainer>
                    <AddProjectsContainer >
                    {this.state.addProject && <AddProject/>}
                </AddProjectsContainer>
                <ViewUserContainer>
                {this.state.viewUser && <ViewUser/>}
                </ViewUserContainer>
            </OuterContainer>
        )
    }
}

export default Admin
const OuterContainer = styled.div`
    display:grid;
    grid-template-columns: 100%;
    justify-content:center;
    align-items:center;
    row-gap:20px;
    overflow:hidden;
`;
const NavBar = styled.div`
    text-align:center;
    background-color:#743c97;
`;
const Para = styled.p`color:white;font-size:25px;`;
const OptionsContainer = styled.div`
    display:grid;
    grid-template-columns: repeat(3,33.33%);
    place-items:center;
    margin-top:20px;
`;
const Image = styled.img`
    width:20%;
    &:hover{
        cursor:pointer;
    }
`;
const Option = styled.div`
    display:grid;
    grid-template-columns:100%;
    place-items:center;
    text-align:center;
    color:#743c97;
    &:nth-of-type(3){
        ${Image}{
            width:55%;
            height:auto;
        }
    }
`;
const AddUserContainer = styled.div`
    display:grid;
    grid-template-columns:100%;
`;
const ViewUserContainer = styled.div`
     display:grid;
    grid-template-columns:100%;
`;
const AddProjectsContainer = styled.div`
     display:grid;
    grid-template-columns:100%;
`;
 
