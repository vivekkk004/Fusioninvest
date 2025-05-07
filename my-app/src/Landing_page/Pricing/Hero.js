import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-5  text-center">
        <h1>Pricing</h1>
        <h3 className="text-muted fs-5 mt-3">
          Free equity investments and flat ₹20 trades and ₹60 trades
        </h3>

        <div className="row justify-content-center mt-5">
          <div className="col-4 fs-5 p-5">
            <img src="Media/pricing0 (1).svg"/>
            <h1>Free equity delivery</h1>
            <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
          </div>
          <div className="col-4 p-5 fs-5">
          <img src="Media/intradayTrades.svg"/>
            <h1>Intraday and F&O trades</h1>
            <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
          </div>
          <div className="col-4 p-5 fs-5">
          <img src="/Media/pricing0.svg"/>
            <h1>Free direct MF</h1>
            <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
