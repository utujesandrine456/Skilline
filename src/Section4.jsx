import React from 'react'
import Smile from "./assets/Smile.jpg";

const Section4 = () => {
  return (
    <div>
        <hr></hr>
        <h6 className='p8'>TESTIMONIAL</h6>
        <h1 className='p6'>What They Say?</h1>
        <p className='section4p'>Skilline has got more than 100k positive<br></br> ratings from our users around the world. </p>
        <p className='section4p'>Some of the students and teachers were<br></br> greatly helped by the Skilline.</p>
        <p className='section4p'>Are you too? Please give your assessment</p>
        <button className="write" >Write your assessment</button>
        <button className="arrow" ><i class="fa-solid fa-arrow-right"></i></button>
        <div className='smilecontainer'>
          <img src={Smile} ></img>
        </div>
        <div className='smilecard'>
          <pre>
            "Thank you so much for your help. It's exactly what 
            <br></br>I've been looking for. You won't regret it. It really 
            <br></br>saves me time and effort. Skilline is exactly what
            <br></br> our business has been lacking."<br></br><br></br><span>Gloria Rose<sub>12 reviews at Yelp</sub></span>
          </pre>
          <hr></hr>
        </div>
        <div className='Head'>
            <h3>Lastest News and Resources</h3>
            <p>See the developments that have occurred to Skillines in the world</p>
        </div>
    </div>
  )
}

export default Section4;