import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const checkBttonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkBttonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <Link className="btn-mobile" to="/sign-up">
      <button
        className={`btn ${checkBttonStyle} ${checkBttonSize}`}
        onClick={type}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
