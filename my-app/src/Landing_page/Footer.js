import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light border-top text-dark mt-5 py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src='Media/logo.png' alt="Zerodha Logo" style={{ width: "55%" }} />
            <p className='mt-4 text-muted'>
              © 2010 – 2025, Fusioninvest Broking Ltd.<br />All rights reserved.
            </p>
            <div className="d-flex gap-4 my-3">

              <i className="bi bi-twitter text-primary fs-3" aria-label="Twitter"></i>
              <i className="bi bi-facebook text-primary fs-3" aria-label="Facebook"></i>
              <i className="bi bi-instagram text-danger fs-3" aria-label="Instagram"></i>
              <i className="bi bi-linkedin text-primary fs-3" aria-label="LinkedIn"></i>
            </div>
          </div>

          <div className="col-md-2">
            <h4>Company</h4>
            <ul className="list-unstyled text-muted fs-5  mb-4 mt-4">
        <li><a href="#" class="text-decoration-none text-secondary ">About</a></li>
        <li><a href="#" class="text-decoration-none text-secondary ">Products</a></li>
        <li><a href="#" class="text-decoration-none text-secondary">Pricing</a></li>
        <li><a href="#" class="text-decoration-none text-secondary">Referral programme</a></li>
        <li><a href="#" class="text-decoration-none text-secondary">Careers</a></li>
        <li><a href="#" class="text-decoration-none text-secondary">Fusioninvest.tech</a></li>
        <li><a href="#" class="text-decoration-none text-secondary">Open source</a></li>
        <li><a href="#" class="text-decoration-none text-secondary">Press & media</a></li>
        <li><a href="#" class="text-decoration-none text-secondary">Fusioninvest Cares (CSR)</a></li>
    </ul>
          </div>

          <div className="col-md-3">
            <h4>Support</h4>
            <ul className="list-unstyled text-muted  gap-3 fs-5 mt-4 ">
            <li><a href="#" className="text-decoration-none text-secondary">Contact us</a></li>
        <li><a href="#" class="text-decoration-none text-secondary">Support portal</a></li>
        <li><a href="#" class="text-decoration-none text-secondary">F-Connect blog</a></li>
        <li><a href="#" class="text-decoration-none text-secondary">List of charges</a></li>
        <li><a href="#" class="text-decoration-none text-secondary">Downloads & resources</a></li>
        <li><a href="#" class="text-decoration-none text-secondary">Video</a></li>
        <li><a href="#" class="text-decoration-none text-secondary">Market overview</a></li>
        <li><a href="#" class="text-decoration-none text-secondary">How to file a complaint?        </a></li>
        <li><a href="#" class="text-decoration-none text-secondary">Status of your <br/>complaints</a></li>
    </ul>
          </div>

          <div className="col-md-3">
            <h4>Account</h4>
            <ul className="list-unstyled text-muted fs-5 mt-4">

              <li><a href="#" class="text-decoration-none text-secondary">Open an account</a></li>
              <li><a href="#" class="text-decoration-none text-secondary">Fund transfer</a></li>
            </ul>
          </div>
        </div>

        <hr />

        <p className="text-muted small fs-6" style={{lineHeight: "2"}}>
        Fusioninvest Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Fusioninvest Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Fusioninvest Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Fusioninvest Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Pune - 560078, Maharashtra, India. For any complaints pertaining to securities broking please write to complaints@Fusioninvest.com, for DP related to dp@Fusioninvest.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF<br/><br/>

Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances<br/><br/>

Smart Online Dispute Resolution | Grievances Redressal Mechanism<br/><br/>

Investments in securities market are subject to market risks; read all the related documents carefully before investing.<br/><br/>

Attention investors: 1. Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.<br/>

"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please   <a>create a ticket here.</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
