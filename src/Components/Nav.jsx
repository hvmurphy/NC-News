import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>| Topic1 | Topic 2
    </nav>
  );
};

export default Nav;
