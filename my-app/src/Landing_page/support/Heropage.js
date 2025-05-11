import React from "react";

const heropage = () => {
  return (
    <section className="container-fluid " id="SupportHero">
      <div className=" p-3" id="supportWrapper">
        <h3 className="mt-4">Support Portal</h3>
        <a className="fs-5" style={{ color: "white" }} href="">
          Track Tickets
        </a>
      </div>

      <div className=" row  p-2">
        <div className="  col-6 p-4">
          <h1 className="fs-3 ">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg: how do i activate F&O,why is my order getting rejected" />
          <br />
          <a
  href="#track-account-opening"
  style={{
    color: "white",
    padding: "0 30px",
    marginTop: "30px",
    display: "inline-block",
    fontSize:"25px"
  }}
>
  Track account opening
</a>
<a
  href="#track-segment-activation"
  style={{
    color: "white",
    padding: "0 30px",
    marginTop: "30px",
    display: "inline-block",
    fontSize:"25px"
  }}
>
  Track segment activation
</a>
<a
  href="#intraday-margins"
  style={{
    color: "white",
    padding: "0 30px",
    marginTop: "30px",
    display: "inline-block",
    fontSize:"25px"
  }}
>
  Intraday margins
</a>
<a
  href="#kite-user-manual"
  style={{
    color: "white",
    padding: "0 30px",
    marginTop: "30px",
    display: "inline-block",
    fontSize:"25px"
  }}
>
  Kite user manual
</a>

        </div>

        <div className="col-6 p-5">
          <h3>Featured</h3>
          <a
            href="#intraday-margins"
            className="fs-4"
            style={{ lineHeight: "3", color: "white" }}
          >
            1.MCX Option contracts expiry - March 2025
          </a>
          <br />
          <a
            href="#kite-user-manual"
            className="fs-4"
            style={{ lineHeight: "3", color: "white" }}
          >
            2. MCX Base metals contract expiry - March 2025
          </a>
        </div>
      </div>
    </section>
  );
};

export default heropage;
