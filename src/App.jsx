import React from "react";

import About from "./Components/About.jsx";
import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";
import Portfolio from "./Components/Portfolio.jsx";

import "./App.css";

const siteProps = {
  name: "Shree Alasande",
  title: "Full Stack Web Developer",
  email: "mailto:shreealasande@gmail.com",
  gitHub: "https://github.com/Shree2124",
  linkedIn:
    "https://www.linkedin.com/in/shree-alasande-933934272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer
        {...siteProps}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      />
    </div>
  );
};

export default App;
