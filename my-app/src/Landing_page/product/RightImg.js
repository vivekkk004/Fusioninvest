import React from 'react';

const RightImg = ({ imageURL, productName,  productDesription, learnMore }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-5 p-5 mt-5">
          <h1 className="mb-3">{productName}</h1>
          <p className="fs-4">{ productDesription}</p>
          <div>
            <a
              className="fs-5"
              href={learnMore}
              style={{  textDecoration: 'none' }}
            >
              Learn More →
            </a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default RightImg;
