import image from "../images/design-desk.jpeg";
const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "A Full Fledged Youtube Clone",
    description: "A Video streaming app with all features.",
    url: "https://github.com/Shree2124/Youtube-Clone",
  },
  {
    title: "Voting System",
    description:
      "A Voting System in windows forms using C#.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "Chat Application",
    description: "A full fledged chat application with authentication in MERN.",
    url: "https://github.com/Shree2124/ChatterHub",
  },
  {
    title: "Book Store",
    description:
      "A simple Book Store with CRUD Operation in MERN.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div
      className="outer-div"
        style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}
      >
        <div className="portfolio">
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
