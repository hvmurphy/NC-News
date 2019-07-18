import React from "react";
import { Link } from "@reach/router";

const Footer = () => {
  return (
    <div className="footer">
      Visit my{" "}
      <Link to="https://github.com/hvmurphy" className="github">
        GitHub
      </Link>
    </div>
  );
};

export default Footer;
