import React from 'react'

const Team = () => {
  return (
    <div className="container">
      <div className="row p-3  border-top">
        <h1 className=" text-center ">
         Pepole </h1>
      </div>

      <div className="row p-3  " style={{lineHeight: "1.8", fontSize: "1.2rem"}}>
        <div className="col-6   text-muted text-center">
          <img src='./Media/vivek.jpg' style={{borderRadius:"100%" ,width:"60%"}}/>
          <h3 className='mt-4'>Vivek Muthe</h3>
          <h6>Founder,CEO</h6>
        </div>

        <div className="col-6 p-3 text-muted fs-4">
          <p >
         Vivek bootstrapped and founded Fusioninvest in 2025 to overcome the hurdles he faced during his decade long stint as a trader. Today, Fusioninvest has changed the landscape of the Indian broking industry. <p/>

<p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
<p>Drawing is his escape.</p>

<p style={{textDecoration:"none"}}>Connect on <a href=''>Homepage </a>/ <a href=''>TradingQnA</a> /<a href='https://www.linkedin.com/in/vivek-muthe-b34225248/'>Linkdin</a> </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team