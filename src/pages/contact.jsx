import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import { ToastContainer, toast } from "react-toastify";
import { saveAs } from 'file-saver';
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("contactFormData"));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.mobile ||
      !formData.message
    ) {
      toast.error("All fields are required!");
      return;
    }
    const blob = new Blob([JSON.stringify(formData, null, 2)], { type: "application/json" });
    saveAs(blob, "contactFormData.json");
    toast.success("Message saved successfully!");
    setFormData({ name: "", email: "", mobile: "", message: "" });
  };

  return (
    <>
      <Header />
      <div className="home-mother">
        <div className="container" style={{ padding: "30px" }}>
          <h3 className="entry-title motherhouse">
            <a href="/contact-us">Contact Us</a>
          </h3>
          <div className="brudcrums">
            <Link to={"/"}>Home &nbsp;»&nbsp;</Link>
            <span className="pagename">Contact Us</span>
          </div>
        </div>
      </div>

      <div className="container subpage">
        <h3 className="heading">Contact Us</h3>
        <div className="row">
          <div className="col-lg-12">
            <div>
              <h5>Location:</h5>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1990566.001957674!2d79.655813!3d12.983092000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528cf9f2d68bcf%3A0xefabf6cd989e8749!2sSacred%20Heart%20Church!5e0!3m2!1sen!2sin!4v1722334393685!5m2!1sen!2sin"
                height={550}
                style={{ border: 0, width: "100%" }}
                allowFullScreen
                title="st charles"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        <h5>Contact Us:</h5>
        <div className="row">
          <div className="ecep bs-callout col-lg-6">
            <img src="images/all-img/s2.jpg" alt="" />
            <ul>
              <li>
                <i className="fa fa-map-marker"></i>
                &nbsp;&nbsp;&nbsp;&nbsp;Sacred Heart Church Valarpuram Post,
              </li>
              <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sriperambur,</li>
              <li>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kanchepuram(Dt.), 602 105
              </li>
              <li>
                <i className="fa fa-phone"></i>&nbsp;&nbsp;
                <a href="tel:+91 9445635370" style={{ color: "#6b1d2f" }}>
                  +91 9445635370
                </a>
              </li>
              <li>
                <i className="fa fa-envelope"></i>&nbsp;&nbsp;
                <a
                  href="mailto:sacredheartvalarpuram@gmail.com"
                  style={{ color: "#6b1d2f" }}
                >
                  sacredheartvalarpuram@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 bs-callout">
            <form className="php-email-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Your Mobile</label>
                <input
                  type="text"
                  className="form-control"
                  name="mobile"
                  id="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows={10}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <div className="text-center">
                <button type="submit" className="buttonjs">
                  Send Message
                </button>
                <span id="loader" style={{ display: "none" }}>
                  <img
                    src="images/subpage/gif/ajaxload.gif"
                    width="32px"
                    height="32px"
                    alt="Loader"
                  />
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default Contact;
