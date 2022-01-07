import React, { useState } from 'react';
import './Homepage.css';

export default function Navbar() {
  return (
    <div className="body-first-content">
      <nav>
        <ul className="navbar">
          <li className="navbar-list">
            <a href="/" className="navbar-link">
              Home
            </a>
          </li>

          <li className="navbar-list">
            <a href="/about-us" className="navbar-link">
              About us
            </a>
          </li>

          <li className="navbar-list">
            <a href="/menu" className="navbar-link">
              Menu & Specials
            </a>
          </li>

          <li className="navbar-list">
            <a href="/contact" className="navbar-link">
              Contact us
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <ul className="content-style">
          <li>YUMMY</li>
          <li style={{ color: 'black', fontSize: '20px' }}>Tasty gift ideas</li>
          <li>Hungry? Order from Yummy</li>
        </ul>
      </div>
    </div>
  );
}
