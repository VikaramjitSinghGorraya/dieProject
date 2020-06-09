import React, { Component } from 'react'
import Axios from 'axios'
import styled from 'styled-components'
import Loader from '../Component/Loader'
import Project from '../Images/Project.svg'
import User from '../Images/User.svg'
import ViewMembersImage from '../Images/viewMembers.png'
import ViewProjects from '../Component/UserProfilePages/ViewProject'
import ViewMembers from '../Component/UserProfilePages/ViewMembers'
import AddUser from '../Component/UserProfilePages/AddUsers'
import ChangePassword from '../Component/UserProfilePages/ChangePassword'
import swal from 'sweetalert';
import { Redirect } from 'react-router-dom'

const url="http://localhost:80/react-backend/UserProfile.php"

// var User_Id='', FirstName='',LastName='',EmailId='',Images=''
export class UserProfile extends Component {
   
    constructor(props){
        super(props)
        this.state={
            User_Id: '',
            First_Name:'',
            Last_Name:'',
            Email_Id:'',
            User_Role:'',
            Image:'',
            DataFetched: false,
            ViewProject: false,
            ViewMembers: false,
            AddUser: false,
            showChangePassword: false,
            redirect:false
        }
        this.onChange = this.onChange.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.submitHandler=this.submitHandler.bind(this)
        this.clickHandler = this.clickHandler.bind(this)
    }
    // componentWillMount(){
       
    //     // window.localStorage.setItem('User_Id', this.props.location.state.User_Id)
    //     // window.localStorage.setItem("First_Name", this.props.location.state.First_Name)
    //     // window.localStorage.setItem("Last_Name", this.props.location.state.Last_Name)
    //     // window.localStorage.setItem("Email_Id", this.props.location.state.Email_Id)
    //     // window.localStorage.setItem("User_Role", this.props.location.state.User_Role)
    // }
    componentDidMount(){
       if(sessionStorage.getItem('userData')){
       
      
            this.getUserData()
        
       }
       else{
            this.setState({
                redirect:true
            })
       }
       
      
      
        // document.getElementById("ViewProjects").addEventListener("click",()=>{
        //     this.setState({
        //         ViewProject: true
        //     })
        // })
     
        // document.getElementById("ViewProjects").addEventListener("click",()=>{
        //     this.setState({
        //         viewProject: true
        //     })
        // })
    }
    getUserData(){
        const obj ={
            User_Id:this.props.location.state.User_Id,
            Operation: 'GetImage'
        }
        Axios.post(url,obj)
        .then((res)=> res.data)
        .then(data=>
            this.setState({
                User_Id: data[0].User_Id,
                First_Name: data[0].First_Name,
                Last_Name:data[0].Last_Name,
                Email_Id:data[0].Email_Id,
                User_Role:data[0].User_Role,
                Image: data[0].Images,
                DataFetched: true
            }))
    }
    onChange = e =>{
        this.setState({
           [ e.target.name]: e.target.files[0].name
        })
    }

    submitHandler(e){
        e.preventDefault()
        console.log(this.state.Image)
        if(this.state.Image === ''){
           
            swal(`Please select an image.`, {
                className: "white-bg",
                closeOnClickOutside: false,
              })
              return
        }
        const obj = {
            Operation: 'UploadImage',
            User_Id:this.state.User_Id,
            Pic: this.state.Image
        }
        Axios.post(url,obj)
        .then((res)=>res.data)
        .then(data=> swal(`${data}`, {
            className: "white-bg",
            closeOnClickOutside: false,
          }))
        .then(data=>this.getUserData())
    }
    clickHandler(e){
        if(e.target.name === 'viewProject'){
            this.setState({
                ViewProject:true,
                ViewMembers:false,
                AddUser:false
            })
        }
         if(e.target.name === 'viewTeamMembers'){
            this.setState({
                ViewMembers: true,
                ViewProject:false,
                AddUser:false
            })
        }
        if(e.target.name === 'addUser'){
            this.setState({
                AddUser:true,
                ViewMembers: false,
                ViewProject:false
            })
        }
        if(e.target.name === 'changePassword'){
                this.setState({
                    showChangePassword: true
                })
        }
        if(e.target.name === 'logOut'){
            sessionStorage.clear()
            this.setState({
                redirect:true
            })
        }
    }

    closeModal(){
        this.setState({
            showChangePassword: !this.state.showChangePassword
        })
    }
    render() {
        if(this.state.redirect){
return <Redirect to='/login'/>
        }
        if (!this.state.DataFetched) {
            return <Loader/>
        }else{
            
        }
        return (
                     <OuterContainer>
                        <Nav>
                            <ImageAndNameContainer>
                                {this.state.Image=== null && <Image src={require('../Images/DefaultImage.png')}/>}
                                {this.state.Image && <Image src={require('../Images/' + this.state.Image)}/>} 
                                <Name>{this.state.First_Name + ' ' +this.state.Last_Name }</Name>   
                            </ImageAndNameContainer>
                            <LogOutContainer>
                                <input style={{display:"none"}} ref={fileInput => this.fileInput = fileInput} name="Image" onChange={this.onChange} type="file"/>
                                <Button onClick={()=> this.fileInput.click()}>Pick Picture</Button>
                                <Button onClick={this.submitHandler}>Upload</Button>
                                <Button name="changePassword" onClick={this.clickHandler}>Change Password</Button>
                                <Button name="logOut" onClick={this.clickHandler}>Log Out</Button>
                            </LogOutContainer>
                        </Nav>
                        <Main>
                            <RoleAndCompanyName>
                                <Heading>{this.state.User_Role} Panel</Heading>
                                {/* <Heading>DICE</Heading> */}
                            </RoleAndCompanyName>
                            <OptionsContainer>
                                <Option>
                                    <OptionImage name="viewProject" onClick={this.clickHandler} src={Project}/>
                                    View Projects
                                </Option>
                                <Option>
                                    <OptionImage name="viewTeamMembers" onClick={this.clickHandler}  src={ViewMembersImage}/>
                                    View Members
                                </Option>
                               
                               {this.props.location.state.User_Role !=='Student' && 
                                <Option>
                                    <OptionImage name="addUser" onClick={this.clickHandler}  src={User}/>
                                    Add User
                                </Option>
                                }
                            </OptionsContainer>
                           
                            {this.state.ViewProject && 
                            <ViewProjects UserId={this.state.User_Id}/>}
                            
                            {this.state.ViewMembers && <ViewMembers UserId={this.state.User_Id}/>}
                            {this.state.AddUser && <AddUser userRole={this.props.location.state.User_Role} UserId={this.state.User_Id}/>}
                            {this.state.showChangePassword && <ChangePassword onClose={this.closeModal} isVisible ={this.state.showChangePassword} UserId={this.state.User_Id}/>}
                        </Main>
                    </OuterContainer>
                
        )
    }
}

export default UserProfile

const OuterContainer =styled.div`
    display:grid;
    grid-template-columns:100%;
    justify-content:space-around;
    align-items:center;
`;
const Nav = styled.div`
    display:grid;
    grid-template-columns:20% 80%;
    align-items:center;
    background-color:#743c97;
    text-align:center;
    @media (min-width:740px){
        grid-template-columns:45% 55%;
        text-align:left;
    }
    `;
const Main = styled.div`display:grid; grid-template-columns:100%;`;
const RoleAndCompanyName = styled.div`display:grid; grid-template-columns:100%;text-align:center;`;
const RoleConariner = styled.div``;
const CompanyNameContainer = styled.div``;
const ImageAndNameContainer = styled.div`
  
    padding-top:10px;
    @media (min-width:740px){
        display:grid;
        grid-template-columns:100%;
        justify-content:space-around;
        margin-left:20px;
    }
`;
const LogOutContainer = styled.div`
    display:grid; 
    grid-template-columns:repeat(4, 20%);
    justify-content:space-evenly;
    @media (min-width:740px){
        grid-template-columns:repeat(4,20%);
        justify-content:space-evenly;
        margin-right:20px;
    }
`;
const Button = styled.button`
border:none;
outline:none;
padding:0;
margin:0;
background-color:#743c97;
color:white;
@media (min-width:740px){
border: 1px solid white;
height:40px;
    &:hover{
    background-color:white;
    color:#743c97;}
}

`;
const Image = styled.img`
    width:70px;
    height:70px;
    border-radius:50%;
    @media (max-width:740px){
         margin:auto; 
    }
    
`;
const Name = styled.h4`color:white;font-size:15px;`;
const Heading = styled.h1`
font-size:40px;
color:#743c97;`;
const OptionsContainer = styled.div`
 display:grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 20%));
    justify-content:center;
    margin-top:20px;
`;
const OptionImage = styled.img`
 width:40%;
 height:auto;
cursor:pointer;
@media (min-width:740px){
    width:20%;
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