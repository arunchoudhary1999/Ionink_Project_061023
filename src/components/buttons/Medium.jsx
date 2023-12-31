import React from "react";
import { NavLink } from "react-router-dom";

const Medium = () => {
  return (
    <div>
      <button type="button" className="btn fs-3">
        <NavLink to="/about">
          <span class="fa fa-medium" style={{ color: "#000000" }}></span>
        </NavLink>
      </button>
    </div>
  );
};

export default Medium;
