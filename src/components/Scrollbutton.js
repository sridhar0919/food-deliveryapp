import React, { useState } from 'react';
import './Homepage.css';

export default function Scrollbutton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  window.addEventListener('scroll', toggleVisible);

  return (
    <a
      onClick={scrollToTop}
      style={{ display: visible ? 'inline' : 'none' }}
      className="move-to-top-button"
    >
      <a>
        <i class="fas fa fa-chevron-circle-up" style={{ color: 'black' }}></i>
      </a>
    </a>
  );
}
