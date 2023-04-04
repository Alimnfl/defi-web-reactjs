import React from "react";
import './About.css'
import {SiHiveBlockchain, SiStrapi, SiFsecure} from 'react-icons/si';
import {VscServerProcess} from 'react-icons/vsc'
import AboutCard from "./AboutCard";

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <h2 className="fw-bold">A Growing Protocol Ecosystem</h2>
                <p>The DeFi Protocol system empowers developers and STRONG Trader to work hard in here...</p>
                <div className="card-container mb-5">
                    <div className="card">
                        <AboutCard icon={<SiHiveBlockchain className="icon"/>} heading="Reliable, tamper-oproof network" text='Lorem ipsum dolor, sit amet consectetur adipisicing elit.' />
                    </div>
                    <div className="card">
                        <AboutCard icon={<SiStrapi className="icon" />} heading="Seamless Connection to Any API" text='Lorem ipsum dolor, sit amet consectetur adipisicing elit.' />
                    </div>
                    <div className="card">
                        <AboutCard icon={<SiFsecure className="icon" />} heading="Proven, Ready-made solutions" text='Lorem ipsum dolor, sit amet consectetur adipisicing elit.' />
                    </div>
                    <div className="card">
                        <AboutCard icon={<VscServerProcess className="icon" />} heading="Secure off-chain computation" text='Lorem ipsum dolor, sit amet consectetur adipisicing elit.' />
                    </div>
                </div>
                <a href="/" className="btn">Use Defi</a>
            </div>
        </div>
    )
}

export default About;