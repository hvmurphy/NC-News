import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Articles from "./Components/Articles";
import Footer from "./Components/Footer";

class App extends Component {
  state = {
    topics: []
  };
  render() {
    const { topics } = this.state;
    return (
      <div className="App">
        <Header />
        <Nav />
        <Router>
          <Articles path="/" />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
