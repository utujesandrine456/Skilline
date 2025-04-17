import React from 'react';

const Card = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card1">
          <div className="icon icon1">
            <i className="fa-solid fa-file-invoice"></i>
          </div>
          <h1 className='p1'>Online Billing,<br/> Invoicing, & Contracts</h1>
          <p>Automate and track emails to<br></br> individuals or groups. Skilline’s <br></br>built-in system helps organize<br></br> your organization </p>
        </div> 
        <div className="card2">
            <div className="icon icon2">
              <i className="fa-solid fa-calendar-days"></i>
            </div>
            <h1 className='p2'>Easy Scheduling<br/> & Attendance Tracking</h1>
            <p>Schedule and reserve classrooms at<br></br> one campus or multiple campuses<br></br>. Keep detailed records of student<br></br> attendance</p>
        </div>
        <div className="card3">
          <div className="icon icon3">
            <i className="fa-solid fa-users"></i>
          </div>
          <h1 className='p3'>Customer Tracking</h1>
          <p className='p4'>Simple and secure control of your<br></br> organization’s financial and legal<br></br> transactions. Send customized<br></br> invoices and contracts</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
