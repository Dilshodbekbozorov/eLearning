import React from 'react'
// import images 
import homeIntro from "../img/home-intro.jpeg"
const AboutSection = () => {
  return (
  <div>
    <div className="description">
      <div className="title">
        <div className="hide">
          <h2>Be education so that </h2>
        </div>
        <div className="hide">
          <h2>you can change </h2>
        </div>
        <div className="hide">
            <h2>the world.</h2>
        </div>
      </div>
        <p>An educated mind can teach many. 
        And educated mind is better then 
        empty one.
        </p>
        <button>About us</button>
    </div>

    <div className="image">
      <img src={homeIntro} alt="this is home intro page for img"  />
    </div>
  </div>  
  )
}

export default AboutSection;

