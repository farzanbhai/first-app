// import React from "react";

import PropTypes from "prop-types";
// import { useState } from "react";

export default function BtnColor(props) {

  return (
    <>
    <h1><strong>Color Buttons</strong></h1>
      <div style={{ backgroundColor: props.bgColor, color: "White" }}>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={() => props.press("Blue")}
        >
          Blue
        </button>
        <button
          type="button"
          className="btn btn-secondary mx-2"
          onClick={() => props.press("Grey")}
        >
          Grey
        </button>
        <button
          type="button"
          className="btn btn-success mx-2"
          onClick={() => props.press("Green")}
        >
          Green
        </button>
        <button
          type="button"
          className="btn btn-danger mx-2"
          onClick={() => props.press("Red")}
        >
          Red
        </button>
        <button
          type="button"
          className="btn btn-warning mx-2"
          onClick={() => props.press("Yellow")}
        >
          Yellow
        </button>
        <button
          type="button"
          className="btn btn-info mx-2"
          onClick={() => props.press("#87CEEB")}
        >
          Sky
        </button>
        <button
          type="button"
          className="btn btn-light mx-2"
          onClick={() => props.press("White")}
        >
          Light
        </button>
        {/* <button
          type="button"
          className="btn btn-dark mx-2"
          onClick={() => props.press("Black")}
        >
          Dark
        </button> */}
      </div>
    </>
  );
}

BtnColor.propTypes = {
    press: PropTypes.any,
    bgColor: PropTypes.any
}