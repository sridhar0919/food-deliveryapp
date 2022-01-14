import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Addtocart from './components/Addtocart';

// import 'bootstrap/dist/css/bootstrap.min.css';

const routing = (
  <Router>
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/menu" element={<Menu />} />
      <Route exact path="/about-us" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/order" element={<Addtocart />} />
    </Routes>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
