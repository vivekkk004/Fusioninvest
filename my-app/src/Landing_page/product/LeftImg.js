import React from "react";

const LeftImg = ({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container mt-5">
      <div className="row ">
        <div className="col-6 ">
          <img src={imageURL}  />
        </div>
        <div className="col-1"></div>
        <div className="col-5 p-5 mt-5">
          <h1 className="mb-3">{productName}</h1>
          <p className=" fs-4">{productDesription }</p>
          <div >
            <a className="fs-5" href={tryDemo} style={ {textDecoration: "none"}}>Try Demo →</a>
            <a className="fs-5" href={learnMore} style={{ marginLeft: '50px', textDecoration: 'none' }}>  Learn More→</a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="Media/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img src="Media/appstoreBadge.svg"
              style={{marginLeft: "50px"}}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftImg;
