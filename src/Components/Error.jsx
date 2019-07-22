import React from "react";
import { Link } from "@reach/router";
import image from "../Images/sorry.png";

const Error = props => {
  return (
    <div className="error">
      <h1>Sorry, no can do!</h1>
      <img src={image} alt="Sad face" />
      <br />
      <br />
      {props.location && props.location.state && (
        <p>{props.location.state.message}</p>
      )}

      <Link to="/">
        <button>Take me back! </button>
      </Link>
    </div>
  );
};

export default Error;
