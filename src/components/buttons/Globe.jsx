import React from "react";
import { NavLink } from "react-router-dom";

const Globe = () => {
  return (
    <>
      <button type="button" className="btn fs-3">
        <NavLink to="/about">
          <span class="fa fa-dribbble" style={{ color: "#000000" }}></span>
        </NavLink>
      </button>
    </>
  );
};

export default Globe;
