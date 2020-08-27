import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Cart from './Components/Course/Cart/Cart';
import Course from './Components/Course/Course';


function App() {
  const [courses,setCourses]=useState([])
   const[ cart,setCart]=useState([])
  useEffect(()=>{
      fetch('https://api.mocki.io/v1/6be6fe98')
      .then(data=>data.json())
      .then(data=>setCourses(data))
     
      
      .catch(error=>console.log(error))
  },[])
   const handleAddCourse=(course)=>{
    const newCart=[...cart,course];
    setCart(newCart);

   }
  
  return (
    <div className="container">
    <div>
      <h1>Total courses:{courses.length}</h1>
      <h4>Course purchased:{cart.length}</h4> 
    
       <Cart cart={cart}></Cart>
        {
          courses.map(course=><Course course={course} handleAddCourse={handleAddCourse}></Course>)   
        } 
     
    </div>
    </div>
  );
}

export default App;
