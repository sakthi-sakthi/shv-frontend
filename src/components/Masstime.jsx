import React from "react";
import "./Masstime.css";
const Masstime = () => {
  return (
    <>
      <section className="sermons" id="sermons">
        <div className="container">
          <header className="mb-4 text-center mb-5">
            <h4 className="mb-0 heading"> News &amp; Events</h4>
          </header>
          <br/>
          <div
            className="row gy-5"
            style={{
              border: "1px #e1dada solid",
              borderRadius: 23,
              fontSize: 14,
            }}
          >
            <div className="col-lg-6 mt-2">
              <h4 className="mb-0" style={{ textAlign: "center" }}>
                Mass Timings
              </h4>
              <p className="text-serif text-primary text-small" />
              <p style={{ color: "blue" }}>பங்கு திருப்பலி நேரம்:</p>
              <p className="text-all" />
              <li>
                ஞாயிறு காலை 7.40 மணிக்கு திருச்செபமாலை, ஆராதனை, திருப்பலி.
              </li>
              <li>வார நாட்களில் காலை 6.30 மணிக்கு திருப்பலி.</li>
              <li>வெள்ளிக்கிழமை மாலை 6.30 மணிக்கு திருப்பலி</li>
              <p />
              <p className="text-serif text-primary text-small" />
              <p style={{ color: "blue" }}>அந்தோனியார் நகர் திருப்பலி நேரம்</p>
              <p className="text-all" />
              <li>
                செவ்வாய்க்கிழமை மாலை 6.00 மணிக்கு திருச்செபமாலை, திருப்பலி
              </li>
              <p />
              <p className="text-serif text-primary text-small" />
              <p style={{ color: "blue" }}>நெமிலி திருப்பலி நேரம்</p>
              <p className="text-all" />
              <li>ஞாயிறு காலை 6.00 மணிக்கு திருச்செபமாலை, திருப்பலி.</li>
              <li>புதன்கிழமை காலை 6.00 மணிக்கு திருச்செபமாலை, திருப்பலி.</li>
              <p />
              <p className="text-serif text-primary text-small" />
              <p style={{ color: "blue" }}>சின்ன வளர்புரம் திருப்பலி நேரம்</p>
              <p className="text-all" />
              <li>
                முதல் சனிக்கிழமை மாலை 6.00 மணிக்கு திருச்செபமாலை, திருப்பலி.
              </li>
              <p />
            </div>
            <div className="col-lg-6 mt-2">
              <h4 className="mb-0" style={{ textAlign: "center" }}>
                Daily Readings
              </h4>
              <p className="text-serif text-primary text-small" />
              <p className="text-all">
                <br />
                Reading 1, First Corinthians 2:10-16
                <br />
                <br />
                Responsorial Psalm, Psalms 145:8-9, 10-11, 12-13, 13-14
                <br />
                <br />
                Gospel, Luke 4:31-37
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Masstime;
