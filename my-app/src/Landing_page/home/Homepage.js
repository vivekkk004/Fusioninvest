import React from 'react'
import  Hero  from './Hero';
import Award from './Award';
import Education from './Education';
import Pricing from './Pricing';
import Stast from './Stast';
import OpenAcc from '../OpenAcc';
import Navbar from "../Navbar";
import Footer from '../Footer.js';


const Homepage = () => {
  return (
    <>
    
      <Hero/>
      <Award/>
      <Stast/>
      <Pricing/>
      <Education/>
      <OpenAcc/>
      
    </>
  );
}

export default Homepage