import React, { Component } from 'react';
import {Button, Form, Container} from "react-bootstrap";
 import axios from "axios";
import NavBar from './NavBar.js';
import "./styles.css";
export default class MySignHOD extends Component {
    constructor(props){
        super(props)
        this.state={
             Date:null,
             Message:null
             
        }
        
      
        this.addout=this.addout.bind(this);
     
      }
   
      addout(e){
        e.preventDefault();
       
        axios({
            method: 'post',
            url: '/SignOut/',
           
            params:{
                id:"hr-"+JSON.parse(sessionStorage.getItem("loggeduser"))._id
            },
            headers:{
              "auth-token":sessionStorage.getItem("token")
          }
          }).then(res=>{
              this.setState({
                  Message:res.data
              });
                console.log(res.data);
                
          }).catch(err=>{
            this.setState({
                Message:err.response.data.msg
            });
          })
        
      
   
      }
    
      
  
    render() {
        return (
            <div>
<NavBar/>              <Container>
            <Form className="form">
 
  <Button  style={{backgroundColor:'#0b1b3f'}} className="move" variant="primary" type="submit" onClick={this.addout}>
    Add Sign Out
  </Button>
</Form>
<div ng-show="Message == null">
<Form.Text className="text-muted">
{this.state.Message}
    </Form.Text>
    </div>
</Container>
</div> 
        )
    }
}
