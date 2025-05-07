import React from "react";

const Tacket = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h3 className=" text-muted ">
          To create a ticket, select a relevant topic
        </h3>

        <div className="col-4 p-5 mt-5 ">
          <h4 className=" text-muted">
            {" "}
            <i class="fa fa-plus-circle" aria-hidden="true"></i> {}
            Account Opening
          </h4>
          <a
            className="fs-5"
            href="#resident-individual"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            Resident individual
          </a>
          <br />
          <a
            className="fs-5"
            href="#minor"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            Minor
          </a>
          <br />
          <a
            className="fs-5"
            href="#nri"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            Non Resident Indian (NRI)
          </a>
          <br />
          <a
            className="fs-5"
            href="#company-partnership"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            Company, Partnership, HUF and LLP
          </a>
          <br />
          <a
            className="fs-5"
            href="#glossary"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            Glossary
          </a>
        </div>

        <div className="col-4 p-5 mt-5 ">
          <h4 className=" text-muted">
            {" "}
            <i class="fa-regular fa-user"></i>{""}
            Your Zerodha Account
          </h4>
          <a
            className="fs-5"
            href="#resident-individual"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            Your Profile
          </a>
          <br />
          <a
            className="fs-5"
            href="#minor"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            Account modification
          </a>
          <br />
          <a
            className="fs-5"
            href="#nri"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            Client Master Report (CMR) and <br /> Depository Participant (DP)
          </a>
          <br />
          <a
            className="fs-5"
            href="#company-partnership"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            Nomination
          </a>
          <br />
          <a
            className="fs-5"
            href="#glossary"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            Transfer and conversion of securities
          </a>
        </div>

        <div className="col-4 p-5 mt-5">
          <h4 className=" text-muted">
            {" "}
            <i class="fa-solid fa-chart-simple"></i> {}
            Kite
          </h4>
          <a
            className="fs-5"
            href="#resident-individual"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            IPO
          </a>
          <br />
          <a
            className="fs-5"
            href="#minor"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            Trading FAQs
          </a>
          <br />
          <a
            className="fs-5"
            href="#nri"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            Margin Trading Facility (MTF) and Margins
          </a>
          <br />
          <a
            className="fs-5"
            href="#company-partnership"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            Charts and orders
          </a>
          <br />
          <a
            className="fs-5"
            href="#glossary"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            <a />
            Alerts and Nudges
          </a>
          <a
            className="fs-5"
            href="#glossary"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            General
          </a>
        </div>
        <div className="col-4 p-5  ">
          <h4 className=" text-muted">
            {" "}
            <i class="fa fa-window-maximize" aria-hidden="true"></i>{""}
            Funds
          </h4>
          <a
            className="fs-5"
            href="#resident-individual"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            Add money
          </a>
          <br />
          <a
            className="fs-5"
            href="#minor"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            Withdraw money
          </a>
          <br />
          <a
            className="fs-5"
            href="#nri"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            Add bank accounts
          </a>
          <br />
          <a
            className="fs-5"
            href="#company-partnership"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            eMandates
          </a>
        </div>
          <div className="col-4 p-5  ">
            <h4 className=" text-muted">
              {" "}
               @  {}
              Console
            </h4>
            <a
              className="fs-5"
              href="#resident-individual"
              style={{ textDecoration: "none", lineHeight: "2.5" }}
            >
              Portfolio
            </a>
            <br />
            <a
              className="fs-5"
              href="#minor"
              style={{ textDecoration: "none", lineHeight: "2.5" }}
            >
              Corporate actions
            </a>
            <br />
            <a
              className="fs-5"
              href="#nri"
              style={{ textDecoration: "none", lineHeight: "2.5" }}
            >
              Funds statement
            </a>
            <br />
            <a
              className="fs-5"
              href="#company-partnership"
              style={{ textDecoration: "none", lineHeight: "2.5" }}
            >
              Reports
            </a>
            <br />
            <a
              className="fs-5"
              href="#glossary"
              style={{ textDecoration: "none", lineHeight: "2.5" }}
            >
              Profile
            </a>
            <a
              className="fs-5"
              href="#glossary"
              style={{ textDecoration: "none", lineHeight: "2.5" }}
            >
              Segments
            </a>
          </div>
          <div className="col-4 p-5  ">
            <h4 className=" text-muted">
              {" "}
              <i class="fa-solid fa-circle-notch"></i> {}
              Coin
            </h4>
            <a
              className="fs-5"
              href="#resident-individual"
              style={{ textDecoration: "none", lineHeight: "2.5" }}
            >
              Understanding mutual funds and Coin
            </a>
            <br />
            <a
              className="fs-5"
              href="#minor"
              style={{ textDecoration: "none", lineHeight: "2.5" }}
            >
              Coin app
            </a>
            <br />
            <a
              className="fs-5"
              href="#nri"
              style={{ textDecoration: "none", lineHeight: "2.5" }}
            >
              Coin web
            </a>
            <br />
            <a
              className="fs-5"
              href="#company-partnership"
              style={{ textDecoration: "none", lineHeight: "2.5" }}
            >
              Transactions and reports
            </a>
            <br />
            <a
              className="fs-5"
              href="#glossary"
              style={{ textDecoration: "none", lineHeight: "2.5" }}
            >
              National Pension Scheme (NPS)
            </a>
          </div>
        </div>
      </div>
  
  );
};

export default Tacket;
