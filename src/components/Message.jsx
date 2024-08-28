import React from "react";
import './Message.css';

const Message = () => {
  return (
    <>
      <section id="works">
        <div className="container">
          <header className="mb-4 text-center mb-5">
            <p className="text-serif mb-0 text-primary" />
            <h4 className="mb-0 heading"> Parish Priest Message</h4>
          </header>
          <div className="row text-center gy-4 align-items-stretch">
            <div className="col-md-4">
              <div className="row">
                <div
                  className="half-page-banner bg-cover"
                  style={{
                    background:
                      "url(images/priest.jpg)",
                    height: 10,
                    width: 300,
                  }}
                />
              </div>
            </div>
            <div className="col-md-8" style={{ textAlign: "Justify" }}>
              <h className="text-capitalize text-all">
                <b>Dear Parishioners,</b>
              </h>
              <p className="text-all">
                <i>
                  Warm Greetings from Fr. Thomas Prem Kumar, Parish priest of
                  Valarpuram.
                </i>
              </p>
              <p className="text-all">
                The sacred heart church, Valarpuram, one of the historical and
                traditional parishes in the diocese of chingleput is extremely
                excited about the celebration of Dodrans Bi-Centennial Jubliee
                (175 years).
              </p>{" "}
              <p className="text-all">
                To make this grace-filled occasion more memorable one, we have
                come up with a Souvenir program to highlight the history and
                activities of the parish. In this record, we take pride in
                inviting you to place your advertisements/ greetings in the
                souvenir program. We request you to solicit ads from your
                bussiness and about your company,
                institution, parish for the souvenir. This souvenir program will
                be distributed not only to valarpuram and its neighbourhood, but
                widely cover the places such as poonamallee, sripermbadur,
                kancheepuram and chingleput and chennai district and all over
                india. In addition, it will be published in our website.
                sacredheartvalarpuram.org which will give yoy company/
                advertisement a lot wider exposure digitally.A lot of
                financially disadvantaged students in their education.
                <br />
                <br /> For your convenience, we have herewith included a
                solicitation letter, ads size and rates for your choice.
                <br />
                <br /> Thank you very much for your generosity. May the lord
                bestow more blessings upon you, your company and your Family.
                <br />
                <br />
                <b>Yours in Christ,</b>
                <br />
                <br />
                Rev. Fr. Thomas Prem Kumar,
                <br />
                <br />
                Parish Priest &amp; Parish Council and Jubilee Committee
                <br />
                Valarpuram
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Message;
