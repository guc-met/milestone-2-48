import React, { Component } from 'react'

import axios from "axios";
import NavBarStaff from "./NavBarStaff.js"
import "./styles.css";

export default class CIManageStaffViewStaffPerCourseView extends Component {
    constructor(props){
        super(props)
        this.state={
            staff:[],
            message:null
        }
    }
    componentDidMount () {
              axios({
                method: 'post',
                url: '/CI/staffPerCourse',
                params: {
                  id:JSON.parse(sessionStorage.getItem("loggeduser"))._id
                },
                data: {
                    courses: this.props.location.state.course_name,
                },headers:{
                  "auth-token":sessionStorage.getItem("token")
              }}).then(res=>{
                if(res.data === "No staff found in this course"||res.data === "you do not give this course"||res.data === "enter all required fildes"){
                  this.setState({
                    message:res.data
                  });
                }else{
                  this.setState({
                    staff:res.data
                  });
                }
                  
                    console.log(res.data);
              }).catch(err=>{
                 
              })
            }
    render() {
          if(this.state.message ===null){
            return (
              <div>
         <NavBarStaff home="/CI" profile="/Staffprofile" attendance="/Myattendance" schedule="/MySchedule" request="/MyRequests"/>
         <div className="table">
          <div class="table-wrapper">
              <table class="fl-table">
                  <thead>
                  <tr>
                  <th>ID</th>
                  <th>Name</th>
          <th>gender</th>
          <th>email</th>
          <th>day_off</th>
          <th>faculty</th>
          <th>department</th>
          <th>schedule</th>
          <th>TA</th>
          <th>CI</th>
          <th>CC</th>
          <th>HOD</th>
         

        
                  </tr>
                  </thead>
                  <tbody>
                  
        {this.state.staff.map(values=>(
        <tr>
        <td>{values._id}</td>  
        <td>{values.Name}</td>
        <td>{values.gender}</td>
        <td>{values.email}</td>
        <td>{values.day_off}</td>
        <td>{values.faculty}</td>
        <td>{values.department}</td>
        <td>{ values.schedule.map(c =>(
            <tr>
                 <td>{c.day_slot}</td> 
             <td>{c.course}</td>

             </tr>
                 
                 ))
         }</td>
        <td>{JSON.stringify(values.TA)}</td>
        <td>{JSON.stringify(values.CI)}</td>
        <td>{JSON.stringify(values.CC)}</td>
        <td>{JSON.stringify(values.HOD)}</td>
        
        </tr>
      
      ))} 
                  </tbody>
              </table>





 
         </div> 
         </div> 
          
            </div> 
           
           )

          }else{
            return (
              <div>
         <NavBarStaff home="/CI" profile="/Staffprofile" attendance="/Myattendance" schedule="/MySchedule" request="/MyRequests"/>
           <div className = "table">
           <h1 >{this.state.message}</h1>
            </div> 
            </div> 
           )
          }
        
    }
}
