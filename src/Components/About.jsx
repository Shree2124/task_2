import React from "react";
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";
const description =
  "Hello my name is Shree. Pursuing Diploma in Computer Engineering From Government Polytechnic, Mumbai";

const skillsList = [
  "Full Stack Web developer",
  "Responsive and Inclusive design",
  "Problem Solving",
  "Focus group testing",
];

const detailOrQuote =
  "I am enthusiastic about creating effective web application as well as about solving problems in new creative ways to drive innovation. I have a passion for technology and enjoy building projects that solve real-world problems. I’m excited to expand my knowledge and collaborate with other developers to create impactful web applications.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "#b7e5bc",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontWeight: 500 }}>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
            fontWeight: 500
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
