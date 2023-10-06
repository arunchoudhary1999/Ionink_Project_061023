import React from "react";
import Awards from "./Awards";
import Experience1 from "./Experience1";
import Book from "./Book";
import Work from "./Work";
import Contact from "./Contact";

const Exprience = () => {
  return (
    <>
      <div style={{ border: "2px solid black", height: "742px" }}>
        <div className="fluid-container mb-5">
          <div className="row">
            <div className="col-12 py-4 my-4" style={{ textAlign: "center" }}>
              <h1 style={{ fontSize: "110px", fontWeight: "900" }}>
                Exper<span style={{ color: "gray" }}>ience</span> Exper
                <span style={{ color: "gray" }}>ience</span>
              </h1>
              <hr style={{ border: "1px solid black" }} />
              <hr style={{ border: "1px solid black", marginTop: "-18px" }} />
            </div>
          </div>
          <div
            className="row"
            style={{
              width: "90%",
              alignItems: "center",
            }}
          >
            <div className="col-md 5 d-flex justify-content-center">
              <img
                src="/assets/images/experience.gif"
                alt="Contact Us"
                height="400px"
                width="500px"
              />
            </div>
            <div
              class="card text-white bg-primary mb-3"
              style={{ width: "55%", borderRadius: "2%" }}
            >
              <div class="card-body" style={{ padding: "60px 50px" }}>
                <h5 class="card-title">
                  16 years of experience in design, between agencies, startups
                  and big corporations. <br />
                  <br />
                </h5>
                <p class="card-text">
                  I don't just push pixels: design strategy, vision and
                  forward-thinking are some of my most appreciated skills.{" "}
                  <br />
                  <br />I have experience on a variety of digital products, with
                  awards winning titles in my portfolio. I lead remote design
                  teams, distributed across different time zones, using an
                  approach made of mentoring, coaching and leading by example..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Exprience />
      <Experience1 />
      <Book />
      <Awards />
      <Work />
      <Contact />
    </>
  );
};

export default Exprience;
