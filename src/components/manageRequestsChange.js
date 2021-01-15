import React, { Component } from 'react';
import {Button, Col,CardGroup,Card} from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'



import image2 from './hod.jpg';
import request from './req.png';
import NavBarStaff from "./NavBarStaff"
import "./styles.css";

export default class manageRequestsChange extends Component{
    constructor(props){
        super(props)
   
     
    }
   
    render(){
      if(JSON.parse(sessionStorage.getItem("loggeduser")).HOD===false ){
        return(
        <h1>Sorry Can't Access this Page</h1>)
      }
      else{
        return (
            <div>
             <div className="row">
 <Col xs={6} md={6}>
 <Carousel.Caption>
                <h1 className="txtalign">Portal</h1>
                <p className="txtalign">Head of Department</p>
              </Carousel.Caption>
              <img
                
                src={image2}
                alt=""
              />
            
            
         
         </Col>
           
         
   
</div>    
 <NavBarStaff home="/Head" profile="/profileHOD" attendance="/MyattendanceHOD" signin="/MySignInHOD" signout="/MySignOutHOD" reset="/passwordHOD" schedule="/MyScheduleHOD" request="/MyRequestsHOD"/><div className="row">
<Col>
<CardGroup>
<Card style={{ width: '18rem' }}>
  <Card.Body>
  <img
        src={request}
        className="center"
      />
    <Card.Title>All staff</Card.Title>
    <Card.Text>
    View all staff change day off requests
    </Card.Text>
    <Button style={{backgroundColor:'#0b1b3f'}} variant="primary" href="/manageRequestsChangeAll">view</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Body>
  <img
        src={request}
        className="center"
      />
    <Card.Title>Single staff</Card.Title>
    <Card.Text>
      View single staff change day off request
    </Card.Text>
    <Button style={{backgroundColor:'#0b1b3f'}} variant="primary" href="/manageRequestsChangeSingle">view</Button>
  </Card.Body>
</Card>


</CardGroup>
</Col>
</div>
</div>
        )
    }
  }
}