import React from "react";
import { Link, useLocation } from "react-router-dom";
function Header() {
  const location = useLocation();
  return (
    <>
      <header className="site-header">
        <div className="top-header-bar">
          <div className="container">
            <div className="row flex-wrap justify-content-center justify-content-lg-between align-items-lg-center">
              <div className="col-12 col-lg-8 d-none d-md-flex flex-wrap justify-content-center justify-content-lg-start mb-3 mb-lg-0">
                <div className="header-bar-email" style={{ fontSize: "13px" }}>
                  <i
                    className="fa fa-envelope"
                    style={{ color: "#f6c93f" }}
                  ></i>
                  <a href="mailto:sacredheartvalarpuram@gmail.com">
                    <span
                      className="__cf_email__"
                      style={{ marginLeft: "0.5rem" }}
                    >
                      sacredheartvalarpuram@gmail.com
                    </span>
                  </a>
                </div>
                <div
                  className="header-bar-text align-items-center justify-content-center"
                  style={{ fontSize: "13px" }}
                >
                  <i className="fa fa-phone" style={{ color: "#f6c93f" }}></i>
                  <a href="tel:+919445635370" style={{ marginLeft: "0.3rem" }}>
                    +91 9445635370
                  </a>
                </div>
              </div>
              <div className="col-12 col-lg-4 d-flex flex-wrap justify-content-center justify-content-lg-end align-items-center">
                <div className="social-icons">
                  <div className="social-icon">
                    <a
                      href="/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-facebook" />
                    </a>
                  </div>
                  <div className="social-icon">
                    <a
                      href="/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                  <div className="social-icon">
                    <a href="/" target="_blank" rel="noreferrer">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="sp-section" className="bootstrap-scrollbar">
          <div className="container-fluid" style={{ padding: 0 }}>
            <div className="row" style={{ margin: 0 }}>
              <div className="col-12 p-0">
                <img
                  src="images/banner.jpg"
                  alt="logo"
                  className="img-fluid"
                  id="banner-image"
                />
              </div>
            </div>
          </div>
        </section>
        <nav class="navbar navbar-expand-lg navbar-light custom-menu">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse header-align-center"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li
                className={`nav-item ${location.pathname === "/" ? "active" : ""
                  }`}
              >
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li
                className={`nav-item ${location.pathname === "/history"
                  ? "active"
                  : ""
                  }`}
              >
                <Link to="/history" className="nav-link">
                  About Us
                </Link>
              </li>
              <li
                className={`nav-item ${location.pathname === "/jubilee-prayer" ? "active" : ""
                  }`}
              >
                <Link to="/jubilee-prayer" className="nav-link">
                  Jubilee Prayer
                </Link>
              </li>
              <li
                className={`nav-item ${location.pathname === "/news" ? "active" : ""
                  }`}
              >
                <Link to="/news" className="nav-link">
                  News & Events
                </Link>
              </li>
              <li
                className={`nav-item ${location.pathname === "/donation" ? "active" : ""
                  }`}
              >
                <Link to="/donation" className="nav-link">
                  Donations
                </Link>
              </li>
              <li
                className={`nav-item ${location.pathname === "/contact-us" ? "active" : ""
                  }`}
              >
                <Link to="/contact-us" className="nav-link">
                  Contact
                </Link>
              </li>
              
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
