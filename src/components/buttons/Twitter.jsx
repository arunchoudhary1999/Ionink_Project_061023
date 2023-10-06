import React from "react";
import { NavLink } from "react-router-dom";

const Twitter = () => {
  return (
    <div>
      <button type="button" className="btn fs-3">
        <NavLink to="/about">
          <span class="fa fa-twitter" style={{ color: "#000000" }}></span>
        </NavLink>
      </button>
    </div>
  );
};

export default Twitter;
