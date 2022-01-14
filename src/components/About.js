import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import './Homepage.css';
import './Menu.css';
import axios from 'axios';
import Footer from './Footer';
import Scrollbutton from './Scrollbutton';

export default function About() {
  const [favourite, setFavourite] = useState(null);
  const fetchFavourite = () => {
    axios
      .get('https://food-deliveryapp1.herokuapp.com/get-food')
      .then((res) => {
        setFavourite(res.data[1].item);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchFavourite();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="home-about">
        <h1>Our advantages</h1>
        <div className="home-about-content" style={{ marginTop: '35px' }}>
          <div className="home-para">
            <p>
              <i class="fas fa-3x fa-truck icon-homepage"></i>
            </p>
            <p>Delivery Time</p>
            <p>
              Delivery times vary based on traffic,the restaurant's ability to
              prepare food and weather conditions.
            </p>
          </div>
          <div className="home-para">
            <p>
              <i class="fas fa-3x fa-hamburger icon-homepage"></i>
            </p>
            <p>Office Lunches</p>
            <p>
              We specialize group lunch deliveries and drop off catering! Give
              our local catering manager a call for more details regarding
              keeping your office well fed!
            </p>
          </div>
          <div className="home-para">
            <p>
              <i class="fas fa-3x fa-coins icon-homepage"></i>
            </p>
            <p>Cash Discount</p>
            <p>
              All prices listed on our website reflect a 3.5% cash discount.
              Paying with credit card will result in a 3.5% increase on all menu
              pricing.
            </p>
          </div>
          <div className="home-para">
            <p>
              <i class="fas fa-3x fa-phone-volume icon-homepage"></i>
            </p>
            <p>Phone Orders</p>
            <p>
              All phone-in-orders will incur a $1.99 phone-in-fee. Orders placed
              online, or with our app, are not subject to this fee.
            </p>
          </div>
        </div>
      </div>

      <div className="home-about">
        <h1 style={{ marginBottom: '40px' }}>Favourites</h1>
        <div className="first-menu">
          {favourite &&
            favourite.map((menu, index) => {
              return (
                <div key={index}>
                  <div className="card">
                    <img src={menu.img} alt="pizza" />
                    <div class="container">
                      <p>{menu.name}</p>
                      <p>{menu.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
      <Scrollbutton />
    </div>
  );
}
