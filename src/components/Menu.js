import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import './Menu.css';
import Footer from './Footer';
import Scrollbutton from './Scrollbutton';
import axios from 'axios';

export default function Menu() {
  const [pizzaMenu, setPizzaMenu] = useState(null);
  const [seafoodMenu, setSeafoodMenu] = useState(null);
  const [dessertMenu, setDessertMenu] = useState(null);

  const fetchMenu = () => {
    axios
      .get('http://localhost:4000/get-food')
      .then((res) => {
        setPizzaMenu(res.data[0].item[0]);
        setSeafoodMenu(res.data[0].item[1]);
        setDessertMenu(res.data[0].item[2]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchMenu();
  }, []);
  return (
    <div>
      <Navbar />
      <section className="menu-content">
        <h1>Pizza menu</h1>
        <div className="first-menu">
          {pizzaMenu &&
            pizzaMenu.map((menu, index) => {
              return (
                <div key={index}>
                  <div className="card">
                    <img
                      src={`http://localhost:4000/pizza${index + 1}.jpg`}
                      alt="pizza"
                    />
                    <div class="container">
                      <p>{menu.name}</p>
                      <p>
                        <span>&#8377;</span>
                        {menu.price}
                      </p>
                      <button className="menu-button">ORDER NOW</button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        {/* <div>
            <div className="card">
              <img src="http://localhost:4000/pizza2.jpg" alt="pizza" />
              <div class="container">
                <p>Pepperoni Extreme</p>
                <p>
                  <span>&#8377;</span>
                  123
                </p>
                <button className="menu-button">ORDER NOW</button>
              </div>
            </div>
          </div>
          <div>
            <div className="card">
              <img src="http://localhost:4000/pizza3.jpg" alt="pizza" />
              <div class="container">
                <p>Pepperoni Extreme</p>
                <p>
                  <span>&#8377;</span>123
                </p>
                <button className="menu-button">ORDER NOW</button>
              </div>
            </div>
          </div>
        </div> */}
        <h1>Seafood Menu</h1>
        <div className="first-menu">
          <div>
            <div className="card">
              <img src="http://localhost:4000/seafood1.jpg" alt="Avatar" />
              <div class="container">
                <p>Pepperoni Extreme</p>
                <p>
                  <span>&#8377;</span>123
                </p>
                <button className="menu-button">ORDER NOW</button>
              </div>
            </div>
          </div>
          <div>
            <div className="card">
              <img src="http://localhost:4000/seafood2.jpg" alt="Avatar" />
              <div class="container">
                <p>Pepperoni Extreme</p>
                <p>
                  <span>&#8377;</span>123
                </p>
                <button className="menu-button">ORDER NOW</button>
              </div>
            </div>
          </div>
          <div>
            <div className="card">
              <img src="http://localhost:4000/seafood3.jpg" alt="Avatar" />
              <div class="container">
                <p>Pepperoni Extreme</p>
                <p>
                  <span>&#8377;</span>123
                </p>
                <button className="menu-button">ORDER NOW</button>
              </div>
            </div>
          </div>
        </div>
        <h1>Dessert Menu</h1>
        <div className="first-menu">
          <div>
            <div className="card">
              <img src="http://localhost:4000/dessert1.jpg" alt="Avatar" />
              <div class="container">
                <p>Pepperoni Extreme</p>
                <p>
                  <span>&#8377;</span>123
                </p>
                <button className="menu-button">ORDER NOW</button>
              </div>
            </div>
          </div>
          <div>
            <div className="card">
              <img src="http://localhost:4000/dessert2.jpg" alt="Avatar" />
              <div class="container">
                <p>Pepperoni Extreme</p>
                <p>
                  <span>&#8377;</span>123
                </p>
                <button className="menu-button">ORDER NOW</button>
              </div>
            </div>
          </div>
          <div>
            <div className="card">
              <img src="http://localhost:4000/dessert3.jpg" alt="Avatar" />
              <div class="container">
                <p>Pepperoni Extreme</p>
                <p>
                  <span>&#8377;</span>123
                </p>
                <button className="menu-button">ORDER NOW</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Scrollbutton />
    </div>
  );
}
