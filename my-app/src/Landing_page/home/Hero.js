import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className='container p-5'>
      <div className='row text-center'>
        <img src='Media/homeHero.png' alt='Hero Image' className='mb-5' />
        <h1>Invest in everything</h1>
        <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
        <button 
          className='p-2 btn btn-primary fs-5' 
          style={{ width: "20%", margin: "0 auto", display: "block" }}
          onClick={() => navigate('/signup')}
        >
          Signup now
        </button>
      </div>
    </div>
  );
};

export default Hero;
