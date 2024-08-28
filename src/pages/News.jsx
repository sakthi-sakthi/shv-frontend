import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <>
      <Header />
      <div className="home-mother">
        <div className="container" style={{ padding: "30px" }}>
          <h3 className="entry-title motherhouse">
            <a href="/news">News & Events</a>
          </h3>
          <div className="brudcrums">
            <Link to={"/"}>Home &nbsp;»&nbsp; </Link>
            <span className="pagename">News & Events</span>
          </div>
        </div>
      </div>
      <h3 className="entry-title text-center mb-2 mt-2">News & Events</h3>
      <div className="container mb-3">
        <div className="row">
          <div className="col-12 col-lg-12 order-2 order-lg-1">
            <h5 className="entry-title text-center mb-2 mt-3">
              Under Construction
            </h5>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default News;
