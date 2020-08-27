import React from 'react';
import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.css";
const Course = (props) => {
  const {name,price}=props.course;
 
  const courseStyle={border:'1px solid red', marginLeft:'300px', marginRight:'300px', marginBottom:'20px',padding:'10px',backgroundColor:'pink'}
   
 const handleAddCourse=props.handleAddCourse;
    return (
        <div style={courseStyle}>
            <h4>Course name: {name}</h4>
            
            <p>Price:${price}</p>
            
            <button onClick={()=>handleAddCourse(props.course)}>Enroll Now</button>
        </div>
    );
};

export default Course;