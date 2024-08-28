import React from "react";

function Scrollbar() {

  return (
    <>
      <div className="scrollbar">
        <div className="container">
          <div className="row flex-wrap justify-content-center justify-content-lg-between align-items-lg-center">
            <div className="col-4 col-lg-2 d-flex">
              <div className="label ripple">Flash News</div>
            </div>
            <div className="col-8 col-lg-10 d-md-flex flex-wrap justify-content-center justify-content-lg-start mb-3 mb-lg-0">
              <div className="marqueenews">
                <div className="marquee">
                  <p
                  >
                    <span>
                      <img
                        src="images/logos/output-onlinegiftools.gif"
                        style={{
                          maxWidth: "40px",
                        }}
                        alt=""
                      />
                      &nbsp;&nbsp;Greetings!!! Welcome to Sacred Heart Valarpuram&nbsp;&nbsp;
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Scrollbar;