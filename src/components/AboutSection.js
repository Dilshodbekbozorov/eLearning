import React from 'react'
// import images 
import homeIntro from "../img/home-intro.jpeg"
// import styled
// import styled from "styled-components"
import { Description, Image, Hide, About } from '../style'

const AboutSection = () => {
  return (
  <About>
    <Description>
      <div className="title">
        <Hide>
          <h2>Be education so that </h2>
        </Hide>
        <Hide>
          <h2>you <span>can change</span>  </h2>
        </Hide>
        <Hide>
            <h2>the world.</h2>
        </Hide>
      </div>
        <p>An educated mind can teach many. 
        And educated mind is better then 
        empty one.
        </p>
        <button>About us</button>
    </Description>

    <Image>
      <img src={homeIntro} alt="this is home intro page for img"  />
    </Image>
  </About>  
  )
}



export default AboutSection;

