import React from 'react'

const Education = () => {
  return (
    <div className='container mt-5'>
    <div className='row'>
      <div className='col-6'>
        <img src='Media/education.svg'  style={{width:"70%"}}/>
      </div>
    <div className='col-6 '>
    <h1 className='mb-5 fs-2'>Free and open market education</h1>
    <p >
        <b>Varsity</b>, the largest online stock market education book in the world covering everything from the basics to advanced trading.
        <a href="" style={{textDecoration:"none"}}>Varsity →</a>
    </p>
    <p className='mt-5'>
        <b>TradingQ&A</b>, the most active trading and investment community in India for all your market related queries.
        <a href="" style={{textDecoration:"none"}}>TradingQ&A →</a>
    </p>
      </div>
  </div>
  </div>
)
} 
export default Education