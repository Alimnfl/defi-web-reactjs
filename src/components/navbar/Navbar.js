import React, { useState } from "react";
import './Navbar.css';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

const Navbarr = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (

        <div className='navbar'>
            <div className="container">
                <h1 className="fw-bold" style={{ marginLeft: '1rem', color: '#00d8ff'}} >DeFi</h1>
                <ul className={click ? 'nav active' : 'nav'}>
                    <li className="nav-item">
                        <a className="text-decoration-none" href="/">Platform</a>
                    </li>
                    <li className="nav-item">
                        <a className="text-decoration-none" href="/">Developers</a>
                    </li>
                    <li className="nav-item">
                        <a className="text-decoration-none" href="/">Community</a>
                    </li>
                    <li className="nav-item">
                        <a className="text-decoration-none" href="/">About</a>
                    </li>
                    <li className="nav-item">
                        <a className='btn rounded-4' href="/">Use Defi</a>
                    </li>
                </ul>
                <div onClick={handleClick} className="hamburger">
                  {click ? (<AiOutlineClose className='icon' />) : (<AiOutlineMenu className='icon' />)}
                </div>
            </div>
        </div>

    );
  }


export default Navbarr;
        