import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Scrollbutton from './Scrollbutton';
import './css/Addtocart.css';
import './css/Addtocart_mobile.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;

    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export default function Addtocart() {
  const [orders, setOrders] = useState(null);
  const [total, setTotal] = useState(null);
  const navigate = useNavigate();

  const fetchOrder = () => {
    axios
      .get('https://food-deliveryapp1.herokuapp.com/get-orders')
      .then((res) => {
        const items = res.data.details[0].item[0].items;
        console.log(res);
        const counter = {};
        items.forEach((obj) => {
          const key = JSON.stringify(obj);
          counter[key] = (counter[key] || 0) + 1;
        });
        const newArr = [];

        for (const [key, value] of Object.entries(counter)) {
          newArr.push([JSON.parse(key), value]);
        }

        setOrders(newArr);
        setTotal(res.data.details[0].item[0].total);
      })
      .catch((err) => console.log(err));
  };

  const displayRazorPay = async (totalPayment) => {
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );
    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    axios
      .post('https://food-deliveryapp1.herokuapp.com/create/orderId', {
        amount: totalPayment * 100,
      })
      .then((res) => {
        console.log(res.data.orderId);
        const options = {
          key: process.env.REACT_APP_RAZORPAY_KEY_ID,
          amount: totalPayment * 100,
          currency: 'INR',
          name: 'Yummy',
          description: 'Thank you for using yummy!',
          image: 'https://example.com/your_logo',
          order_id: res.data.orderId,
          handler: function (response) {
            // alert(`response.razorpay_payment_id`);
            alert('Order placed successfully');
            // alert(response.razorpay_order_id);
            // alert(response.razorpay_signature);
            navigate('/');
          },
          prefill: {
            name: 'Sridhar',
            email: 'sridhar@example.com',
            contact: '9999999999',
          },
        };
        var paymentObject = new window.Razorpay(options);
        paymentObject.open();
      });
  };

  useEffect(() => {
    fetchOrder();
  }, []);
  // fetchCount();
  console.log(orders, total);

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <section className="order-section">
        <div className="order-content">
          <h1>ORDER SUMMARY</h1>
          {orders &&
            orders.map((item, index) => {
              return (
                <div key={index} className="order-menu">
                  <div>
                    <img src={item[0].img} />
                  </div>
                  <div>
                    <h2>
                      {item[0].name}&nbsp;&nbsp;<span>({item[1]})</span>
                    </h2>
                    <p>
                      <span>&#8377;</span>
                      {item[0].price * item[1]}
                    </p>
                  </div>
                </div>
              );
            })}
          <div className="payment-section">
            <div style={{ marginBottom: '10px' }}>
              <span className="span-one">SUBTOTAL:</span>
              <span className="span-two">&#8377;{total}</span>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <span className="span-one">DELIVERY CHARGES:</span>
              <span className="span-two">&#8377;35</span>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <span className="span-one">GRAND TOTAL:</span>
              <span
                className="span-two"
                style={{ fontSize: '23px', marginTop: '-2px' }}
              >
                &#8377;{total + 35}
              </span>
            </div>
          </div>
          <div className="payment-section-button">
            <button
              className="menu-button"
              onClick={(e) => {
                e.preventDefault();
                navigate('/menu');
              }}
            >
              RE-ORDER
            </button>
            <button
              className="menu-button"
              onClick={(e) => {
                e.preventDefault();
                displayRazorPay(total + 35);
              }}
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <Scrollbutton />
    </div>
  );
}
