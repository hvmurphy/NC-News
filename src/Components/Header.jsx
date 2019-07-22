import React from "react";
import icon from "../Images/userIcon.png";

const Header = ({ users, updateUser, username }) => {
  return (
    <div className="HeaderSection">
      <h1 className="Header">
        <span className="nc">NC </span>News
      </h1>
      <p className="login">
        <img src={icon} alt="User icon" />
        Logged in as:{" "}
        <select
          value={username}
          name="username"
          onChange={event => {
            updateUser(event.target.value);
          }}
        >
          {users.map(user => {
            return (
              <option key={user.username} value={user.username}>
                {user.username}
              </option>
            );
          })}
        </select>
      </p>
    </div>
  );
};

export default Header;
