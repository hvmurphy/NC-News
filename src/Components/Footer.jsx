import React from "react";
import icon from "../Images/githubIcon.png";

const Footer = () => {
  return (
    <div className="footer">
      Visit my{" "}
      <a href="https://github.com/hvmurphy" className="github">
        GitHub <img src={icon} alt="GitHub Logo" />
      </a>
    </div>
  );
};

export default Footer;
