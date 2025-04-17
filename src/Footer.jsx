import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='logo2'/>
      <h1 className='logo-name2'>Skilline</h1>
      <hr/>
      <h4>Virtual Class<br/>for Zoom</h4>
      <p>Subscribe to get our Newsletter</p>
      <input type="text" placeholder='Your Email'/>
      <button>Subscribe</button>
      <div className='flex-container'>
        <h5>Careers <hr/>Privacy Policy<hr/>Terms & Conditions</h5>
      </div>
      <h5>© 2021 Class Technologies Inc. </h5>
    </footer>
  )
}

export default Footer;