import React from "react";
import MainVideo from '../../assets/video.mp4';
import './Hero.css'


const Hero = () => {
    return(
        <div className="hero" >
            <video autoPlay loop muted id='video'>
                <source src={MainVideo} type="video/mp4" />
            </video>
            <div className="hero-text">
                <h1 className="fw-bold mx-2">Decentralized</h1>
                <h1 className="fw-bold mx-2"><span className="blue me-2">Trading</span>Protocol</h1>
                <p className="fw-semibold ms-2">Guaranteed liquidly trading for millions of users and to Ethereum Applications.</p>
                <div className="btn-group mx-4">
                    <button type="button" className="px-3 me-2 btn rounded-5 ">Use DeFi</button>
                    <button type="button" className="p-2 px-3 ms-2 btn-outline rounded-4">FAQ</button>
                </div>
            </div>
            <div className="bottom-text">
                <h2>Total Volume Secured: $68,123,413,563.23</h2>
            </div>
        </div>
    )
}

export default Hero;