import React from 'react'
// import images 
import homeIntro2 from '../img/home-intro_2.jpg'

import { About, Description, Image } from '../style'
import { styled } from 'styled-components'

const BenefitsSection = () => {
  return <Benefits>
    <Description>
      <h2>High-Quality Learning System</h2>
      <div className="benefit">
        <h3>Online platform</h3>
        <h3>High experienced and talented mentors</h3>
        <h3>Fast learning system</h3>
        <h3>Offline school for children</h3>
      </div>
    </Description>
    <Image>
      <img src={homeIntro2} alt="a girl in laboratory" />
    </Image>
  </Benefits>
}

// Styled 
const Benefits = styled(About)`
  flex-direction: row-reverse;
  h2 {
    color: #30bee1;
    padding-bottom: 1rem;
    margin: 0 0 0 5rem;  
    width: 100%;
  }
  h3 {
    font-size: 1.1rem;
    padding: 1rem;
    background-color: #fff;
    font-weight: 400;
    color: #000;
    margin: 1rem 0rem 0rem 5rem;
    width: 70%;
    clip-path: polygon(0 10%, 100% 0%, 100% 91%, 0% 100%);
    border-left: 4px solid #30bee1;
  }
  `

export default BenefitsSection;