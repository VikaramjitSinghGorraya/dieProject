import React, { Component } from 'react'
import styled from 'styled-components'
import Axios from 'axios'
import swal from 'sweetalert';

const url="http://localhost:80/react-backend/ViewProjects.php"
export class ViewProject extends Component {
    
    constructor(props){
        super(props)
        this.state={
            UserId:this.props.UserId,
            ProjectId: '',
            tableData:false,
            userDeleted: false
        }
    }
    componentDidMount(){
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
        this.setState({tableData: data}))
    }
    renderTableHeader(){
        return (
            <TableRow>
                <TableHeading>Project Id</TableHeading>
                <TableHeading>Project Name</TableHeading>
                <TableHeading>Description</TableHeading>
                <TableHeading>Remove User</TableHeading>
            </TableRow>
        )
        }

renderTableBody() {
  console.log(this.state.tableData)
        return Object.keys( this.state.tableData).map(items => {
            return (
                <TableRow key={items}>
                    <TableData>{this.state.tableData[items].Project_Id}</TableData>
                    <TableData>{this.state.tableData[items].Project_Name}</TableData>
                    <TableData>{this.state.tableData[items].Project_Description}</TableData>
                    
                    {/* <TableData><img width="120px" height="100px" src={require("../../Images/"+ this.state.tableData[items].Images)}/></TableData> */}
                    <TableData><Button onClick={()=>this.deleteUser(this.state.tableData[items],items+1)}>Delete</Button></TableData>
                </TableRow>
            )
        })
    }

    render() {
        return (
            <OuterContainer>
                 {this.state.tableData.length!==0 && <Table>
                        <TableBody id="userTable">
                        {this.renderTableHeader()}
                        {this.renderTableBody()}
                        </TableBody>
                    </Table>}
                 {this.state.tableData.length === 0 && <Heading>No Projects To Show.</Heading>}
            </OuterContainer>
        )
    }
}

export default ViewProject
const OuterContainer = styled.div`
    text-align:center;
   max-height: 280px;overflow-Y:scroll; 
   margin-top:20px;
   /* border-bottom: 0.5px solid #743c97; */
`;
const Table = styled.table`width:100%; border:1px solid #743c97; border-bottom:none;`;
const TableBody = styled.tbody``;
const TableData = styled.td`border:1px solid #743c97;`;
const TableRow = styled.tr`text-align:center; color:#743c97;`;
const TableHeading = styled.th`background-color: #743c97;color:white;position:sticky;top:0;`;
const Button = styled.button`
    background-color: #743c97;
    color:white;
    padding:0px 15px;
    font-size:20px;
    border: 1px solid transparent;
    outline:none;
    &:hover{
        color:#743c97;
        background-color:white;
        border:1px solid #743c97;
    }
`;
const Heading = styled.h3`color:#743c97`;