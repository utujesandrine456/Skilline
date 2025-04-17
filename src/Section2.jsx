import React from 'react';
import Woman from "./assets/Woman.png";
import People from "./assets/People.png";

const Section2 = () => {
  return (
    <div>
        <h6>What is <span>Skilline?</span></h6>
        <h5>Skilline is a platform that allows educators to create online classes whereby they can<br></br> store the course materials online; manage assignments, quizzes and exams; monitor<br></br> due dates; grade results and provide students with feedback all in one place.</h5>
        <div className='section2'>
            <img className='woman' src={Woman}></img>
            <img  className='people'src={People}></img>
            <div className='glass1'></div>
            <div className='glass2'></div>
        </div>
        <div>
            <h1 className="woman1">FOR INSTRUCTORS</h1>
            <button className="start">Start a class today</button>
        </div>
        <div>
            <h1 className='people1'>FOR STUDENTS</h1>
            <button className='enter'>Enter access code</button>
        </div>
    </div>
  )
}

export default Section2;