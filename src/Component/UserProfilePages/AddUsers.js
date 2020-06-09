import React, { Component } from 'react'
import styled from 'styled-components'
import Axios from 'axios'
import swal from 'sweetalert';

const postUrl="http://localhost:80/react-backend/AddUsers.php"
const url="http://localhost:80/react-backend/ViewProjects.php"
const url1="http://localhost:80/react-backend/StudentAndTechnician.php"
export class AddProject extends Component {
    constructor(props){
        super(props)
        this.state={
            UserId: this.props.UserId,
            UserRole: this.props.userRole,
            ProjectData: '',
            studentListData:'',
            technicianListData:'',
            projectListData: '',
            Project_Name:'',
            DropDown_Project_name:'',
            DropDown_Student_name:'',
            DropDown_Technician_name:'',
            Project_Description:'',
            Researcher_Name:'',
            showDropDown:false
        }
        this.onChange = this.onChange.bind(this)
         this.submitHandler=this.submitHandler.bind(this)
    }
    componentDidMount(){
        this.getSelectStudentListData()
        this.getSelectTechnicianListData()
        this.getUserTableData()
    }
    getUserTableData () {
        const obj ={
            User_Id : this.state.UserId,
            Operation: 'GetProjects'
        }
         Axios.post(url,obj)
        .then(res=>res.data)
        .then(data=>
         this.setState({ProjectData: data}))
     }
     getSelectStudentListData(){
        const obj = {
            Operation: "GetStudnet"
        }
        Axios.post(postUrl,obj)
        .then(res=>  res.data)
        .then(data=> this.setState({studentListData: data}))
        .catch(err=>console.log(err))
    }
    getSelectTechnicianListData(){
        const obj = {
            Operation: "GetTechnician"
        }
        Axios.post(postUrl, obj)
        .then(res=> res.data)
        .then(data=> this.setState({technicianListData: data}))
    }
    getTechnicianSelectList(){
        if(this.state.technicianListData !== null){
            return Object.keys( this.state.technicianListData).map(items => {
                return (
                    <Options key={items} value={this.state.technicianListData[items].First_Name + " " + this.state.technicianListData[items].Last_Name}>{this.state.technicianListData[items].First_Name + " " + this.state.technicianListData[items].Last_Name}</Options>
                )
            })
        }
    }
    getStudentSelectList(){
        if(this.state.studentListData !== null){
            return Object.keys( this.state.studentListData).map(items => {
                return (
                    <Options key={items} value={this.state.studentListData[items].First_Name + " " + this.state.studentListData[items].Last_Name}>{this.state.studentListData[items].First_Name + " " + this.state.studentListData[items].Last_Name}</Options>
                )
            })
        }
    }
    getProjectSelectListData(){
        if(this.state.projectData !== null){
            return Object.keys( this.state.ProjectData).map(items => {
                return (
                  
                    <Options key={items} value={this.state.ProjectData[items].Project_Name }>{this.state.ProjectData[items].Project_Name}</Options>
                )
            })
        }
    }
        
    onChange = e =>{
        this.setState({
           [ e.target.name]: e.target.value
        })
        console.log(e.target.name)
    }
    submitHandler(e){
        e.preventDefault()

        /**ADDIN STUDENTS*/
        if(e.target.name === 'AddStudent'){
            if(  this.state.DropDown_Project_name === "" ||  this.state.DropDown_Student_name === ""){
                swal(`Please select student and project.`, {
                    className: "white-bg",
                    closeOnClickOutside: false,
                  })
                  return
            }
            const obj = {
                Project_Name: this.state.DropDown_Project_name,
                Student_Name: this.state.DropDown_Student_name,
                Operation: 'AddStudent'
            }
            Axios.post(url1,obj)
            .then(res => res.data)
            .then(data=> swal(`${data}`, {
                className: "white-bg",
                closeOnClickOutside: false,
              }))
              .then(document.getElementById("studentDropdown").selectedIndex="0",
                        document.getElementById("projectDropdown").selectedIndex="0"
                  )
            .catch(err=>(console.log(err)))
        }

        
        /**ADDING TECHNICIAN */
        if(e.target.name === 'AddTechnician'){
            if(this.state.DropDown_Project_name === "" || this.state.DropDown_Technician_name === ""){
                console.log("here");
                swal(`Please select technician and project.`, {
                    className: "white-bg",
                    closeOnClickOutside: false,
                  })
                  return
            }
            const obj ={
                Project_Name: this.state.DropDown_Project_name,
                Technician_Name: this.state.DropDown_Technician_name,
                Operation:'AddTechnician'
            }
            Axios.post(url1,obj)
            .then(res => res.data)
            .then(data=> 
                swal(`${data}`, {
                    className: "white-bg",
                    closeOnClickOutside: false,
                  }))
                  .then(document.getElementById("studentDropdown").selectedIndex="0",
                        document.getElementById("technicianDropdown").selectedIndex="0",
                        document.getElementById("projectDropdown").selectedIndex="0"
                  )
            .catch(err=>(console.log(err)))
        }


        
        /**DELETE TECHNICIAN */
        if(e.target.name === 'DeleteTechnician'){
            if(this.state.DropDown_Technician_name === ""){
                swal(`Please select technician to be deleted.`, {
                    className: "white-bg",
                    closeOnClickOutside: false,
                  })
                  return
            }
            const obj = {
                Technician_Name: this.state.DropDown_Technician_name,
                User_Role:this.state.UserRole,
                Operation: 'DeleteTechnician'
            }
            Axios.post(url1,obj)
            .then(res => res.data)
            .then(data=> swal(`${data}`, {
                className: "white-bg",
                closeOnClickOutside: false,
              }))
              .then(document.getElementById("technicianDropdown").selectedIndex="0",
                        document.getElementById("projectDropdown").selectedIndex="0"
                  )
            .catch(err=>(console.log(err)))
        }
        
        this.setState({
            Project_Name:'',
            Project_Description:'',
            showDropDown: true
        })
        

        /**DELETE STUDENT */
        if(e.target.name === 'DeleteStudent'){
            if(this.state.DropDown_Student_name === ""){
                swal(`Please select student to be deleted.`, {
                    className: "white-bg",
                    closeOnClickOutside: false,
                  })
                  return
            }
            const obj = {
                Student_Name: this.state.DropDown_Student_name,
                User_Role:this.state.UserRole,
                Operation: 'DeleteStudent'
            }
            Axios.post(url1,obj)
            .then(res => res.data)
            .then(data=> swal(`${data}`, {
                className: "white-bg",
                closeOnClickOutside: false,
              }))
              .then(document.getElementById("studentDropdown").selectedIndex="0",
                        document.getElementById("projectDropdown").selectedIndex="0"
                  )
            .catch(err=>(console.log(err)))
        }
        
        this.setState({
            Project_Name:'',
            Project_Description:'',
            showDropDown: true
        })
    }
    render() {
        return (
            <OuterContainer>
                <ProjectDropDownContainer>
                    <Heading>Select Project</Heading>
                    <Select id ="projectDropdown" required name="DropDown_Project_name" onChange={this.onChange}>
                        <Options default value="">--PROJECT--</Options>
                            {this.getProjectSelectListData()}
                    </Select >
                </ProjectDropDownContainer>
                <InnerContainer>
                 <ProjectNameAndStudentContainer>
                    <Heading>ADD Student</Heading>
                    <Select id="studentDropdown" required name="DropDown_Student_name" onChange={this.onChange}>
                        <Options default value="">--STUDENT--</Options>
                        {this.getStudentSelectList()}
                    </Select >
                    <ButtonContainer>
                        <Button type="submit" name="AddStudent" onClick={this.submitHandler}>ADD</Button>
                        <Button type="submit" name="DeleteStudent" onClick={this.submitHandler}>DELETE</Button>
                    </ButtonContainer>
                 </ProjectNameAndStudentContainer>
                 
                 {this.state.UserRole!=='Technician' && 
                 <ProjectAndTechnicianDropDownContainer>
                 <Heading>Add Technician</Heading>
                        <Select id="technicianDropdown" required name="DropDown_Technician_name" onChange={this.onChange}>
                        <Options default value="">--TECHNICIAN--</Options>
                        {this.getTechnicianSelectList()}
                    </Select> 
                    {/* <Select required name="DropDown_Project_name" onChange={this.onChange}>
                        <Options default value="0">--PROJECT--</Options>
                        {/* {this.getProjectSelectListData()} */}
                    {/* </Select > */} 
                    <ButtonContainer>
                    <Button type="submit" name="AddTechnician" onClick={this.submitHandler}>ADD</Button>
                    <Button type="submit" name="DeleteTechnician" onClick={this.submitHandler}> DELETE</Button>
                    </ButtonContainer>
                    
                 </ProjectAndTechnicianDropDownContainer>
                }
                 </InnerContainer>
            </OuterContainer>
        )
    }
}

export default AddProject
const OuterContainer = styled.div`
   display:grid;
   grid-template-columns:100%;
   text-align:center;
   row-gap:60px;
   margin-top:20px;
`;
const ButtonContainer = styled.div`
display:grid;
grid-template-columns: 40% 40%;
justify-content:center;
`;
const ProjectDropDownContainer = styled.div`
    display:grid;
    grid-template-columns:100%;
    justify-content:center;
    @media (min-width:740px){
        grid-template-columns:40%;
    justify-content:center;
    }
`;
const InnerContainer = styled.div`
    display:grid;
    grid-template-columns:100%;
    grid-gap: 25px;
    justify-content:center;
    align-items:center;
    @media (min-width:740px){
        grid-template-columns: repeat(auto-fit, minmax(120px, 40%));

    }
`;
const ProjectNameAndStudentContainer = styled.div`
    display:grid;
    grid-template-columns:100%;
    justify-content:center;
    align-items:center;
    row-gap:20px;
`;
const ProjectAndTechnicianDropDownContainer=styled.div`
display:grid;
grid-template-columns:100%;
row-gap:20px;
justify-content:center;
align-items:center;
`;
const Heading = styled.h3`color:#743c97`;

const Select = styled.select`
width:90%;
 margin:auto;
 border:2px solid #743c97;
 border-radius:10px;
 outline:none;
text-align-last:center;
 -webkit-text-align-last:center;
 -moz-text-align-last:center;
 -ms-text-align-last:center;
`;
const Options = styled.option`

margin:auto;
text-align:center;
text-align-last:center;
 -webkit-text-align-last:center;
 -moz-text-align-last:center;
 -ms-text-align-last:center;
`;
const Button = styled.button`
width:90%; margin:auto;
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
    }`;
const TextArea = styled.textarea`
    width:90%;
    margin:auto;
`;