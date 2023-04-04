import React from 'react'
import './Developer.css'
import Terminal from '../../assets/terminal.png'

const Developer = () => {
  return (
    <div className='developers'>
      <div className="container">
        <div className="left">
            <h2 className='fw-bold'>Superpower for DEFI developers</h2>
            <p className='fw-semibold'>Checkout the <span className='blue'>documentation</span>, the <span className='blue'>quick start</span> or a guide below to integrate your project with thousands of token and billions of liquidity :V </p>
        </div>
        <div className="right">
            <div className="img-container">
                <img src={Terminal} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Developer
