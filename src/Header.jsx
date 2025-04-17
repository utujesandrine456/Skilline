import React from 'react'
import GIRL from "./assets/Girl.png";
import activeman from './assets/download.png';
const Header = () => {
  return (
    <>
      <header>
        <nav className='nav'>
          
          <img className='logo'></img>
          <h1 className='logo-name'>Skilline</h1>
          <ul>
            <li><a href="#" className='home'>Home</a></li> 
            <li><a href="#" className='careers'>Careesrs</a></li> 
            <li><a href="#" className='blog'>Blog</a></li> 
            <li><a href="#" className='about'>About Us</a></li> 
          </ul>
          <div className='button-container'>
          <button className='signup'>Sign Up</button>
          <button className='login'>Login</button>
          </div>
          <h2>Studying <span>Online is now <br/> much easier</span></h2>
          <h4>Skilline is an interesting platform that will teach<br/>you in more an interactive way</h4>
          <img className="girl" src={GIRL} alt='girl'></img>
        </nav>
      </header>
      <div className="main-cards">
          <div className="card-1">
            <i className="fa-solid fa-calendar-days"></i>
            <h3>250k</h3>
            <h4>Assisted Student</h4>
          </div>
          <div className='card-2'>
            <i class="fa-solid fa-square-poll-vertical"></i>
          </div>
          <div  className='card-3'>
            <i class="fa-solid fa-envelope"></i>
            <h3>Congratulations</h3>
            <h4>Your admission completed</h4>
          </div>
          <div className='card-4'>
              <img src={activeman}/>
              <h3>User Exprerince Class</h3>
              <h4>Today at 12.00 PM</h4>
              <button>Join now</button>
          </div>
      </div>
    </>
    
  );
}

export default Header;