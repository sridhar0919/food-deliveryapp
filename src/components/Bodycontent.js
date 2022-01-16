import React from 'react';
import './css/Homepage.css';
import brandIcon1 from './images/brand1.jpg';
import brandIcon2 from './images/brand2.jpg';
import brandIcon3 from './images/brand3.jpg';
import brandIcon4 from './images/brand4.jpg';
import brandIcon5 from './images/brand5.jpg';

export default function Bodycontent() {
  return (
    <div>
      <section>
        <div className="body-content">
          <div>
            <a href="/menu" className="img-title">
              <i className="fas fa-2x fa-utensils"></i>
              <h5>SEAFOOD</h5>
            </a>
          </div>
          <div>
            <a href="/menu" className="img-title img-second">
              <i className="fas fa-2x fa-utensils"></i>
              <h5>PIZZA</h5>
            </a>
          </div>
          <div>
            <a href="/menu" className="img-title">
              <i className="fas fa-2x fa-utensils"></i>
              <h5>DESSERTS</h5>
            </a>
          </div>
        </div>
        <div className="home-about">
          <h1>Food delivery is easy as 1, 2, 3, 4...</h1>
          <h3>
            Enjoy your food prepared by professional cooks specially for you.
          </h3>
          <div className="home-about-content">
            <div className="home-para">
              <p>
                <i class="fas fa-3x fa-map-marked-alt icon-homepage"></i>
              </p>
              <p>Search</p>
              <p>
                You search for whatever you want to eat and we'll find you the
                best delivery and takeout restaurants near you.
              </p>
            </div>
            <div className="home-para">
              <p>
                <i class="fas fa-3x fa-book-open icon-homepage"></i>
              </p>
              <p>Browse</p>
              <p>
                Browse our ratings and reviews. You can also make it easy for
                yourself and pick the place with the coolest name.
              </p>
            </div>
            <div className="home-para">
              <p>
                <i class="fas fa-3x fa-clipboard-check icon-homepage"></i>
              </p>
              <p>Select</p>
              <p>
                Take a good look at the menu, click whatever you want to eat and
                drink, and head to the checkout
              </p>
            </div>
            <div className="home-para">
              <p>
                <i class="fas fa-3x fa-thumbs-up icon-homepage"></i>
              </p>
              <p>Enjoy</p>
              <p>
                Enjoy your food. This is the part where you get to eat your food
                while basking in the warm glow of time not spent cooking.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="img-block">
        <img src={brandIcon1} />
        <img src={brandIcon2} />
        <img src={brandIcon3} />
        <img src={brandIcon4} />
        <img src={brandIcon5} />
      </div>
    </div>
  );
}
