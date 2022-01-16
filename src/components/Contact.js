import React, { useState } from 'react';
import Navbar from './Navbar';
import './css/Contact.css';
import './css/Contact_mobile.css';
import Footer from './Footer';
import Scrollbutton from './Scrollbutton';

export default function Contact() {
  const initialValues = { name: '', email: '', mobileNo: '', message: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) errors.name = 'Name is required';
    if (!values.email) errors.email = 'Email is required';
    if (!values.mobileNo) errors.mobileNo = 'Mobile number is required';
    if (!values.message) errors.message = 'Message is required';
    return errors;
  };

  return (
    <div>
      <Navbar />
      <h1 className="main-heading">Contact Us</h1>
      <div className="contact-main">
        <div className="contact-section1">
          <div className="section1-part1">
            <p>CHENNAI</p>
            <p>901 East Street, </p>
            <p>
              Anna Nagar,
              <br />
              MAS 600021
            </p>
          </div>
          <div className="section1-part2">
            <p>Freephone: +1 234 567 8901</p>
            <p>Telephone: +1 234 567 8901</p>
            <p>FAX: +1 234 567 8901</p>
            <p>E-mail: mail@demolink.org</p>
          </div>
        </div>
        <div className="contact-section2">
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div style={{ color: '#adde3e' }}>
              Your message was sent successfully
            </div>
          ) : (
            <div></div>
          )}
          <form name="contact-form" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                value={formValues.name}
                id="name"
                name="name"
                placeholder="Name *"
                onChange={handleChange}
              />
              <p className="para-form">{formErrors.name}</p>
            </div>

            <div>
              <input
                type="email"
                value={formValues.email}
                id="email"
                name="email"
                placeholder="Email *"
                onChange={handleChange}
              />
              <p className="para-form">{formErrors.email}</p>
            </div>

            <div>
              <input
                type="tel"
                value={formValues.mobileNo}
                id="mobileNo"
                name="mobileNo"
                placeholder="Phone *"
                onChange={handleChange}
              />
              <p className="para-form">{formErrors.mobileNo}</p>
            </div>

            <div>
              <textarea
                id="message"
                value={formValues.message}
                name="message"
                placeholder="Message *"
                onChange={handleChange}
              />
              <p className="para-form">{formErrors.message}</p>
            </div>

            <button>SUBMIT MESSAGE</button>
          </form>
        </div>
      </div>
      <Footer />
      <Scrollbutton />
    </div>
  );
}
