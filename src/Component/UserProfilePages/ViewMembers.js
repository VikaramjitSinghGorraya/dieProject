import React, { Component } from 'react'
import Axios from 'axios'
import styled from 'styled-components'

const url="http://localhost:80/react-backend/ViewMembers.php"

export class ViewMembers extends Component {
    constructor(props){
        super(props)
        this.state={
            UserId:this.props.UserId,
            Users:''
        }
    }
    componentDidMount(){
        this.getMembersId()
    }
    getMembersId(){
        const obj ={
            UserId: this.state.UserId
        }
        Axios.post(url,obj)
        .then(res=> res.data)
        .then(data=>(this.setState({
            Users: data
        })))
       this.getMembersData()
    }
    getMembersData(){
        return Object.keys( this.state.Users).map(items => {
            return (
                <Div key={items}>
                    <p>{this.state.Users[items].First_Name + ' ' +this.state.Users[items].Last_Name}</p>
                   {this.state.Users[items].Images !== null && <Image src={require("../../Images/" + this.state.Users[items].Images)}/>}
                   {this.state.Users[items].Images === null && <Image src={require("../../Images/DefaultImage.png")}/>}
                    <p>{this.state.Users[items].User_Role}</p>
                    {/* <TableData><img width="120px" height="100px" src={require("../../Images/"+ this.state.tableData[items].Images)}/></TableData> */}
                </Div>
            )
        })
    }
    render() {
        return (
            <OuterContainer>
                {this.getMembersData()}
            </OuterContainer>
        )
    }
}

export default ViewMembers
const OuterContainer = styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(120px, 1fr));
    padding: 20px 0;
   place-items:center;
   margin-top:20px;
   text-align:center;
`;
const Image = styled.img`
    width:70px;
    height:70px;
    border-radius:50%;
`;
const Div = styled.div`
/* width:20%;
text-align:center; */
`;

