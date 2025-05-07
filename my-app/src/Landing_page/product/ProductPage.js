import React from "react";
import Hero from "./Hero";
import LeftImg from "./LeftImg";
import RightImg from "./RightImg";
import Universe from "./Universe";

const ProductPage = () => {
  return (
    <>
      <Hero />
      <LeftImg
        imageURL="Media/kite.png"
        productName="Kite"
        productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightImg
        imageURL='Media/console.png'
        productName="Console"
        productDesription="The central dashboard for your Fusioninvest  account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
      />

      <LeftImg
        imageURL="Media/coin.png"
        productName="Coin"
        productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightImg
        imageURL="Media/console.png"
        productName="Kite Connect API"
        productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.."
        learnMore=""
      />
      <LeftImg
        imageURL="Media/kiteconnect.png"
        productName="Varsity mobile"
        productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      
      <p className=" fs-3 text-center  " style={{ marginTop: '5rem', marginBottom: '5rem' }}>Want to know more about our technology stack? Check out the <a href="">Fusioninvest b.tech</a> blog.</p>
      
      <Universe />
    </>
  );
};

export default ProductPage;
