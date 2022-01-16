import React, { useState } from 'react';
import './css/Homepage.css';
import './css/Home_mobile.css';

export default function Navbar() {
  const [isActive, setActive] = useState('false');
  return (
    <div className="body-first-content">
      <nav className="navbar">
        <div>
          <a
            href="#"
            className="toggle-button"
            onClick={() => {
              setActive(!isActive);
            }}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </a>
        </div>

        <div className={isActive ? 'navbar-links active' : 'navbar-links'}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <span>|</span>

            <li>
              <a href="/about-us">About us</a>
            </li>
            <span>|</span>

            <li>
              <a href="/menu">Menu & Specials</a>
            </li>
            <span>|</span>

            <li>
              <a href="/contact">Contact us</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="second-content">
        <ul className="content-style">
          <li>YUMMY</li>
          <li style={{ color: 'black', fontSize: '20px' }}>Tasty gift ideas</li>
          <li>Hungry? Order from Yummy</li>
        </ul>
      </div>
    </div>
  );
}
