import React from 'react'

const Pricing = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-4'>
       <h1 className='mb-3 fs-2'> Unbeatable pricing</h1>
       <p> We pioneered the concept of discount broking and price transparency in India . Flat fees and no hidden charges.</p>
       <a href='' className='mx-5 ' style={{textDecoration:'none'}} >
         See Pricing <span>Go forward ⟶</span></a>
        </div>
        <div className='col-2'></div>
        <div className='col-6'>
       <div className='row p-2 text-center'>
        <div className='col border'>
          <h1  className='mb-3'>₹0</h1>
          <p>Free enuity delivery and <br/> direct mutual funds</p>
        </div>
        <div className='col p-2 border'>
        <h1 className='mb-3'>₹20</h1>
        <p>Intraday and F&O</p>
        </div>
       </div>
        </div>
      </div>
    </div>
  )
} 

export default Pricing