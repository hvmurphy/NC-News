import React from "react";

const Header = ({ username }) => {
  return (
    <div>
      <h1 className="Header">
        <span className="nc">NC </span>News
      </h1>
      <p className="login">
        Logged in as: <span>{username}</span>
      </p>
    </div>
  );
};

export default Header;
