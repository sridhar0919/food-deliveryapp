import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import './Menu.css';
import Footer from './Footer';
import Scrollbutton from './Scrollbutton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import Addtocart from './Addtocart';

export default function Menu() {
  const [pizzaMenu, setPizzaMenu] = useState(null);
  const [seafoodMenu, setSeafoodMenu] = useState(null);
  const [dessertMenu, setDessertMenu] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  const fetchMenu = () => {
    axios
      .get('https://food-deliveryapp1.herokuapp.com/get-food')
      .then((res) => {
        setPizzaMenu(res.data[0].item[0]);
        setSeafoodMenu(res.data[0].item[1]);
        setDessertMenu(res.data[0].item[2]);
      })
      .catch((err) => console.log(err));
  };

  const placeOrders = (e) => {
    axios
      .post('https://food-deliveryapp1.herokuapp.com/add-orders', {
        items: items,
        total: totalAmount,
      })
      .then((res) => {
        console.log(res);
        navigate('/order');
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
                    <img src={menu.img} alt="pizza" />
                    <div class="container">
                      <p>{menu.name}</p>
                      <p>
                        <span>&#8377;</span>
                        {menu.price}
                      </p>
                      <div className="button-add-remove">
                        <button
                          onClick={() => {
                            setTotalAmount(totalAmount + menu.price);
                            setCount(count + 1);
                            setItems([...items, menu]);
                          }}
                          className="menu-button"
                        >
                          ADD
                        </button>
                        <button
                          onClick={(e) => {
                            setTotalAmount(totalAmount - menu.price);
                            setCount(count - 1);
                            setItems((prevState) => {
                              const newItem = [...prevState];
                              const newerItem = newItem.filter(
                                (item) => item.name !== menu.name
                              );
                              const dishItem = newItem.filter(
                                (item) => item.name === menu.name
                              );

                              dishItem.pop();
                              return newerItem.concat(...dishItem);
                            });
                          }}
                          className="menu-button"
                        >
                          REMOVE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <h1>Seafood Menu</h1>
        <div className="first-menu">
          {seafoodMenu &&
            seafoodMenu.map((menu, index) => {
              return (
                <div key={index}>
                  <div className="card">
                    <img src={menu.img} alt="pizza" />
                    <div class="container">
                      <p>{menu.name}</p>
                      <p>
                        <span>&#8377;</span>
                        {menu.price}
                      </p>
                      <div className="button-add-remove">
                        <button
                          onClick={() => {
                            setTotalAmount(totalAmount + menu.price);
                            setCount(count + 1);
                            setItems([...items, menu]);
                          }}
                          className="menu-button"
                        >
                          ADD
                        </button>
                        <button
                          onClick={(e) => {
                            setTotalAmount(totalAmount - menu.price);
                            setCount(count - 1);
                            setItems((prevState) => {
                              const newItem = [...prevState];
                              const newerItem = newItem.filter(
                                (item) => item.name !== menu.name
                              );
                              const dishItem = newItem.filter(
                                (item) => item.name === menu.name
                              );

                              dishItem.pop();
                              return newerItem.concat(...dishItem);
                            });
                          }}
                          className="menu-button"
                        >
                          REMOVE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <h1>Dessert Menu</h1>
        <div className="first-menu">
          {dessertMenu &&
            dessertMenu.map((menu, index) => {
              return (
                <div key={index}>
                  <div className="card">
                    <img src={menu.img} alt="pizza" />
                    <div class="container">
                      <p>{menu.name}</p>
                      <p>
                        <span>&#8377;</span>
                        {menu.price}
                      </p>
                      <div className="button-add-remove">
                        <button
                          onClick={() => {
                            setTotalAmount(totalAmount + menu.price);
                            setCount(count + 1);
                            setItems([...items, menu]);
                          }}
                          className="menu-button"
                        >
                          ADD
                        </button>
                        <button
                          onClick={(e) => {
                            setTotalAmount(totalAmount - menu.price);
                            setCount(count - 1);
                            setItems((prevState) => {
                              const newItem = [...prevState];
                              const newerItem = newItem.filter(
                                (item) => item.name !== menu.name
                              );
                              const dishItem = newItem.filter(
                                (item) => item.name === menu.name
                              );

                              dishItem.pop();
                              return newerItem.concat(...dishItem);
                            });
                          }}
                          className="menu-button"
                        >
                          REMOVE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        {items.length !== 0 ? (
          <div className="pop-up">
            <div className="pop-up-head">
              <h2>
                <i
                  className="fas fa-arrow-circle-right"
                  style={{ marginRight: '10px' }}
                ></i>
                YOUR ORDER&nbsp;<span>({count})</span>
              </h2>
            </div>
            <div className="pop-up-right">
              <h3>
                Subtotal: <span>&#8377;</span>
                {totalAmount}
              </h3>
              <button className="pop-up-button" onClick={placeOrders}>
                ORDER
              </button>
            </div>
          </div>
        ) : (
          <></>
        )}
      </section>
      <Footer />
      <Scrollbutton />
    </div>
  );
}
