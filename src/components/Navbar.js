import React, { useState } from 'react';
import './css/Homepage.css';
import './css/Home_mobile.css';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isActive, setActive] = useState('false');
  const navigate = useNavigate();
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
              <a
                onClick={(e) => {
                  navigate('/');
                }}
                style={{ cursor: 'pointer' }}
              >
                Home
              </a>
            </li>
            <span>|</span>

            <li>
              <a
                onClick={(e) => {
                  navigate('/about-us');
                }}
                style={{ cursor: 'pointer' }}
              >
                About us
              </a>
            </li>
            <span>|</span>

            <li>
              <a
                onClick={(e) => {
                  navigate('/menu');
                }}
                style={{ cursor: 'pointer' }}
              >
                Menu & Specials
              </a>
            </li>
            <span>|</span>

            <li>
              <a
                onClick={(e) => {
                  navigate('/contact');
                }}
                style={{ cursor: 'pointer' }}
              >
                Contact us
              </a>
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
