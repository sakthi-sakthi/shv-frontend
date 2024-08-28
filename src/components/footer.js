import React from "react";
import { Link } from "react-router-dom";

function Footer() {

  const year = new Date().getFullYear();
  return (
    <>
      <footer className="site-footer">
        <div className="footer-widgets">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="section-heading">
                  <h2 className="entry-title">About Us</h2>
                </div>
                <div className="row">
                  <div className="col-4">
                    <img
                      src="images/all-img/footer.png"
                      alt=""
                      style={{
                        display: "block",
                        marginLeft: "0",
                        maxWidth: "103px",
                        marginRight: "auto",
                      }}
                    />
                  </div>
                  <div className="col-8">
                    <p
                      style={{
                        color: "white",
                        textAlign: "justify ",
                        fontSize: "14px",
                      }}
                    >
                      The parochial church of Valarpuram was the under the jurisdiction of the Padroado diocese of Madras-­Mylapore. The construction of the Church commenced in 1830 and was complete in 1850.
                    </p>
                  </div>
                  <p
                    style={{
                      color: "white",
                      textAlign: "justify",
                      fontSize: "14px",
                    }}
                  >
                    The Church was officially raised to an independent parish in 1845. The survey undertaken by Mr. Clison in 1859 had recorded that there were 508 Catholic Christians were practicing Catholicism in the locality.
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="foot-contact">
                  <div className="section-heading">
                    <h2 className="entry-title">Contact Us</h2>
                  </div>
                  <ul>
                    <li>
                      <i className="fa fa-phone mr-2" />
                      <Link to={"tel:+919445635370"}>+91 9445635370</Link>
                    </li>
                    <li>
                      <i className="fa fa-envelope mr-2" />
                      <Link to={"mailto:sacredheartvalarpuram@gmail.com"}>
                        sacredheartvalarpuram@gmail.com
                      </Link>
                    </li>
                    <li>
                      <i className="fa fa-map-marker mr-2" />
                      <span>
                        <p style={{ color: "#fff" }}>
                          Sacred Heart Church
                          Valarpuram Post,
                          Sriperambur,
                          Kanchepuram(Dt.),
                          602 105
                        </p>
                        <li>
                          <a
                            href="/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fab fa-twitter mr-2" />
                          </a>
                          &nbsp;
                          <a
                            href="/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fab fa-google-plus mr-2" />
                          </a>
                          &nbsp;
                          <a
                            href="/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fab fa-facebook mr-2" />
                          </a>
                          &nbsp;
                          <a
                            href="/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fab fa-linkedin" />
                          </a>
                        </li>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="foot-latest-news">
                  <div className="section-heading">
                    <h2 className="entry-title">Our Location</h2>
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1990566.001957674!2d79.655813!3d12.983092000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528cf9f2d68bcf%3A0xefabf6cd989e8749!2sSacred%20Heart%20Church!5e0!3m2!1sen!2sin!4v1722334393685!5m2!1sen!2sin"
                    width={300}
                    height={200}
                    title="Sacred HeartChurch"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

            </div>
            <div style={{ marginBottom: "-17px" }}>
              <p
                className="text-center"
                style={{ fontSize: "14px", color: "white" }}
              >
                Copyright © {year} Sacred Heart Church - Valarpuram, All
                rights reserved. Powered by
                <a
                  className="tech"
                  style={{ color: "#ffd700", textDecoration: "none" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.boscosofttech.com/"
                  title="Boscosoft Technologies"
                  alt="Boscosoft Technologies"
                >
                  &nbsp;Boscosoft Technologies
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
