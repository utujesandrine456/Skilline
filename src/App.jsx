import { useState } from 'react';
import './App.css';
import Header from "./Header.jsx";
import Card from "./Card.jsx";
import Section1 from './Section1.jsx';
import Section2 from './Section2.jsx';
import Section3 from './Section3.jsx';
import Rectangle from './Reactangle.jsx';
import Section4 from './Section4.jsx';
import Section5 from './Section5.jsx';
import pen from './assets/Pen.png';
import mac from './assets/MAc.png';
import cat from './assets/Cat.png';
import Section6 from './Section6.jsx';
import Footer from './Footer.jsx';


function App() {
  return(
    <>
      <Header/>
      <Section1/>
      <Card/>
      <Section2/>
      <Section3/>
      <div style={{ position: "absolute", marginTop: "-264px", marginLeft: "744px" }}>
          <Rectangle 
            x="1655" 
            y="0" 
            width="350" 
            height="340" 
            rx="45" 
            ry="45" 
            fill="#23BDEE" 
            stroke="#23BDEE" 
            strokeWidth="2" 
          />
          <div style={{position: 'absolute', left: "650px"}}>
            <Rectangle 
              x="1655" 
              y="0" 
              width="520" 
              height="500" 
              rx="55" 
              ry="55" 
              fill="#F3AC50" 
              stroke="#F3AC50" 
              strokeWidth="2" 
            />
          </div>
        </div>
        <Section4 /> 
        <div style={{
            marginTop: "50px",
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center",  
            justifyContent: "center", 
            width: "100%",  
            minHeight: "100vh",  
            gap: "20px",
            marginLeft: "580px"}}>
          <Section5
            image={pen}
            tag="PRESS RELEASE"
            title={<>Class Technologies Inc. Closes $30 Million <br /> Series A Financing to Meet High Demand</>}
            description={<>"Class Technologies Inc., the company that<br /> created Class,..."</>}
          />

          <Section5
            image={mac}
            tag="NEWS"
            title={<>Zoom’s earliest investors are betting <br /> millions on a better Zoom for schools</>}
            description={<>Zoom was never created to be a consumer <br /> product. Nonetheless, the...</>}
          />

          <Section5
            image={cat}
            tag="NEWS"
            title={<>Former Blackboard CEO Raises $16M to <br /> Bring LMS Features to Zoom Classrooms</>}
            description={<>This year, investors have reaped big <br /> financial returns from betting on Zoom...</>}
          />
          <Section6 />
          <Footer />
        </div>
      </>
);
}

export default App;
