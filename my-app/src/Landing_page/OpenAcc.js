import React from 'react';
import { useNavigate } from 'react-router-dom';

const OpenAcc = () => {
  const navigate = useNavigate();

  return (
    <div className="container text-center mb-5 my-5">
      <h1 className="fw-bold m-4">Open a Fusioninvest account</h1>
      <p className="text-muted fs-4">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
      </p>
      <button
        className="btn btn-primary btn-lg mt-4 mb-5"
        onClick={() => navigate('/signup')}
      >
        Sign up for free
      </button>
    </div>
  );
};

export default OpenAcc;
