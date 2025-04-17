import React from 'react';
import Teacher from "./assets/Teacher.jpg";

const Section3 = (props) => {
  return (
    <div className='section3'>
        <h1 className='p5'>Everything you can do in a physical<br></br> classroom, <span>you can do with Skilline</span></h1>
        <p className='section3p'>Skilline’s school management software helps traditional<br></br> and online schools manage scheduling, attendance,<br></br> payments and virtual classrooms all in one secure<br></br> cloud-based system.</p>
        <a href="#" className='link'>Learn more</a>
        <img  className="teacher" src={Teacher}></img>
      </div>
  )
}

export default Section3;