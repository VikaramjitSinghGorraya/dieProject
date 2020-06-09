import React, { Component } from 'react'
import styled from 'styled-components'
import Axios from 'axios'
import swal from 'sweetalert';
const postUrl="http://localhost:80/react-backend/AddProject.php"

export class AddProject extends Component {
    constructor(props){
        super(props)
        this.state={
            researcherListData:'',
            projectListData: '',
            Project_Name:'',
            DropDown_Project_name:'',
            Project_Description:'',
            Researcher_Name:'',
            showDropDown:false
        }
        this.onChange = this.onChange.bind(this)
        this.submitHandler=this.submitHandler.bind(this)
    }
    componentDidMount(){
        this.getSelectResearcherListData()
        this.getSelectProjectListData()
    }

    getSelectResearcherListData(){
        Axios.get(postUrl)
        .then(res=> res.data)
        .then(data=> this.setState({researcherListData: data}))
    }
    getSelectProjectListData(){
        const obj = {
            Operation: "Get"
        }
        Axios.post(postUrl, obj)
        .then(res=> res.data)
        .then(data=> this.setState({projectListData: data}))
    }
    getResearcherSelectList(){
        if(this.state.researcherListData !== null){
            return Object.keys( this.state.researcherListData).map(items => {
                return (
                    <Options key={items} value={this.state.researcherListData[items].First_Name + " " + this.state.researcherListData[items].Last_Name}>{this.state.researcherListData[items].First_Name + " " + this.state.researcherListData[items].Last_Name}</Options>
                )
            })
        }
    }
    getProjectSelectListData(){
        if(this.state.projectListData !== null){
            return Object.keys( this.state.projectListData).map(items => {
                return (
                  
                    <Options key={items} value={this.state.projectListData[items].Project_Name }>{this.state.projectListData[items].Project_Name}</Options>
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
        console.log("inside submit")
        console.log(this.state.Project_name)
        if(e.target.name === 'AddProject'){
            if(  this.state.Project_name === "" ||  this.state.Project_Description === ""){
                swal(`Please enter the required fields.`, {
                    className: "white-bg",
                    closeOnClickOutside: false,
                  })
                  return
            }else{

            }
            const obj = {
                Project_Name: this.state.Project_Name,
                Project_Description: this.state.Project_Description,
                Operation: 'PostProject'
            }
            Axios.post(postUrl,obj)
            .then(res => res.data)
            .then(data=> swal(`${data}`, {
                className: "white-bg",
                closeOnClickOutside: false,
              }))
              .then(data=>this.getSelectProjectListData())
            .catch(err=>(console.log(err)))
        }
        if(e.target.name === 'AddResearcherToProject'){
            if(this.state.DropDown_Project_name === "" || this.state.Researcher_Name === ""){
                console.log("here");
                swal(`Please select the required fields`, {
                    className: "white-bg",
                    closeOnClickOutside: false,
                  })
                  return
            }
            const obj ={
                DropDown_Project_Name: this.state.DropDown_Project_name,
                Researcher_Name: this.state.Researcher_Name,
                Operation:'AddProjectWithResearcher'
            }
            Axios.post(postUrl,obj)
            .then(res => res.data)
            .then(data=> 
                swal(`${data}`, {
                    className: "white-bg",
                    closeOnClickOutside: false,
                  }))
                 .then(document.getElementById("researcherDropDown").selectedIndex="0",
                        document.getElementById("projectDropDown").selectedIndex="0"
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
                 <InnerContainer>
                 <ProjectNameAndDescriptionContainer>
                 <Heading>ADD Project</Heading>
                    <Input required type="text" name="Project_Name" value={this.state.Project_Name} onChange={this.onChange} placeholder="Project Name"/>
                    <TextArea required name="Project_Description" value={this.state.Project_Description} onChange={this.onChange} border="1px solid #743c97" type="text" placeholder="Enter description..."/>
                     <Button type="submit" name="AddProject" onClick={this.submitHandler}>ADD</Button>
                 </ProjectNameAndDescriptionContainer>
                 
                 <ProjectAndResearcherDropDownContainer>
                 <Heading>Add Researhcer To Existing Project</Heading>
                        <Select id="researcherDropDown" required name="Researcher_Name" onChange={this.onChange}>
                        <Options defaultValue value="">--RESEARCHER--</Options>
                        {this.getResearcherSelectList()}
                    </Select> 
                    <Select id="projectDropDown" required name="DropDown_Project_name" onChange={this.onChange}>
                        <Options selected  value="">--PROJECT--</Options>
                        {this.getProjectSelectListData()}
                    </Select >
                    <Button type="submit" name="AddResearcherToProject" onClick={this.submitHandler}>ADD</Button>
                 </ProjectAndResearcherDropDownContainer>
                 
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
    justify-content:center;
    align-items:center;
`;
const InnerContainer = styled.div`
    display:grid;
    grid-template-columns:100%;
    grid-gap: 65px;
    justify-content:center;
    align-items:center;
    @media (min-width:740px){
        grid-template-columns: 40% 40%;
    }
`;
const ProjectNameAndDescriptionContainer = styled.div`
    display:grid;
    grid-template-columns:100%;
    justify-content:center;
    align-items:center;

    row-gap:20px;
    @media (min-width:740px){
        max-height:231px;
    }
    
`;
const ProjectAndResearcherDropDownContainer=styled.div`
display:grid;
grid-template-columns:100%;
row-gap:36px;
justify-content:center;
align-items:center;
@media (min-width:740px){
        max-height:236px;
    }
`;
const Heading = styled.h3`color:#743c97`;
const Input = styled.input`
text-align-last:center; -webkit-text-align-last:center;-moz-text-align-last:center;-ms-text-align-last:center;
width:90%;
margin:auto;
    @media (min-width:740px){
    padding: 5px 0 0 2px;
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
}`;
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