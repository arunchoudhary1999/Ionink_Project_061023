import React from "react";
import { NavLink } from "react-router-dom";
import Exprience from "./Experience";
import Awards from "./Awards";
import Experience1 from "./Experience1";
import Book from "./Book";
import Work from "./Work";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <div style={{ border: "2px solid black" }}>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        ></div>
        <div className="carousel-inner">
          <div
            className="carousel-item active"
            style={{ height: "644px", width: "100%", background: "#d661ff" }}
          >
            <div style={{ width: "90%", float: "right" }}>
              <div
                style={{
                  marginTop: "-40px",
                }}
              >
                <h1
                  style={{
                    fontSize: "320px",
                    fontWeight: "900",
                    letterSpacing: "8px",
                    color: "white",
                  }}
                >
                  CIAO
                </h1>
              </div>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    width: "80%",
                  }}
                >
                  <div style={{ paddingBottom: "10px" }}>
                    <h1
                      style={{
                        fontSize: "120px",
                        fontWeight: "600",
                        letterSpacing: "5px",
                        lineHeight: "110px",
                      }}
                    >
                      I'm Rubens Cantuni
                    </h1>
                  </div>
                  <div>
                    <h1 style={{ fontWeight: "200" }}>
                      Award-winning design lead
                    </h1>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn"
                  style={{
                    fontSize: "100px",
                    width: "20%",
                  }}
                >
                  <NavLink
                    to="/about"
                    style={{
                      padding: "12px 25px",
                      border: "5px dotted black",
                      borderRadius: "100%",
                    }}
                  >
                    <span
                      class="fa fa-arrow-down"
                      style={{ color: "#000000" }}
                    ></span>
                  </NavLink>
                </button>
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
    </div>
  );
};

export default Home;
