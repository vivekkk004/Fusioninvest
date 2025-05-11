import React from "react";

const Universe = ({ imageURL }) => {
  return (
    <div className="container mt-5 ">
      <div className="row text-center mt-5 ">
        <div className="col-12">
          <h1>The Fusioninvest  Universe</h1>
          <p className="fs-4">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img style={{ width: "60%" }} src="Media/smallcaselogo.png" />
          <p className="text-small text-muted mt-4">
            Thematic investment platform
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img style={{ width: "45%" }} src="Media/streakLogo.png" />
          <p className="text-small text-muted mt-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img style={{ width: "60%" }} src="Media/sensibullLogo.svg" />
          <p className="text-small text-muted mt-4">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col-4 p-3 mt-5 ">
          <img style={{ width: "60%" }} src="Media/zerodhaFundhouse.png" />
          <p className="text-small text-muted mt-4">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5 ">
          <img style={{ width: "60%" }} src="Media/goldenpiLogo.png" />
          <p className="text-small text-muted mt-4">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5 ">
          <img style={{ width: "50%" }} src="Media/dittoLogo.png" />
          <p className="text-small text-muted mt-3">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5"
          style={{ width: "20%", margin: "0 auto " }}
        >
          {" "}
          Signup now
        </button>
      </div>
    </div>
  );
};

export default Universe;
