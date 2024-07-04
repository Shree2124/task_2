import React from "react";
import PropTypes from "prop-types";
import image from "../assets/Home.png";

const imageAltText =
  "Adult female in office setting leaning against a glass wall while holding a platinum Microsoft Surface Pro 7 in tablet mode preparing to write with Microsoft Surface Pen";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div
        style={{
          position: "absolute",
          top: "5rem",
          left: "2rem",
          width: "17rem",
          color: "#08e99f",
        }}
      >
        <h1 style={{fontWeight: 500}}>{name}</h1>
        <h2 style={{fontWeight: 400}}>{title}</h2>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "Shree Alasande",
  title: "Full Stack Web Developer",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
