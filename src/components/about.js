import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="home-page-welcome">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12 order-2 order-lg-1">
              <div className="welcome-content">
                <header className="entry-header">
                  <h2 className="entry-title">
                    Welcome to Sacred Heart Valarpuram
                  </h2>
                </header>
                <div className="entry-content mt-2">
                  The parochial church of Valarpuram was the under the jurisdiction of the Padroado diocese of Madras-­Mylapore. The construction of the Church commenced in 1830 and was complete in 1850. The Church was officially raised to an independent parish in 1845. The survey undertaken by Mr. Clison in 1859 had recorded that there were 508 Catholic Christians were practicing Catholicism in the locality.
                </div>
                <center>
                  <Link to="/history">
                    <button className="brown-button btn-sm">Read More</button>
                  </Link>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
