import "./portfolio.css";

import IMG1 from "../../assets/credenz.png";
import IMG2 from "../../assets/sm.jpg";
import IMG3 from "../../assets/earthly.png";
import IMG4 from "../../assets/pm.jpg";
import IMG5 from "../../assets/web.png";
import IMG6 from "../../assets/ctd.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    { 
      id: 1,
      title: "Credenz'23",
      img: IMG1,
      description:
        "Credenz, organized by the PICT IEEE Student Branch, is an annual technical festival that has become one of Pune's premier technical events.",
      technologies: "ReactJs | Django",
      link: " https://credenz.in",
      github: "",
    },
    {
      id: 6,
      title: "Credenz Tech Dayz",
      img: IMG6,
      description:
        "An intra-college annual techfest  where the brightest minds of PICT compete in technical as well as non-technical events.",
      technologies: "ReactJS | Django",
      link: "https://ctd.pictieee.in",
      github: "",
    },
    {
      id: 2,
      title: "Project Mangement",
      img: IMG4,
      description:
        "Application that allows users to manage and collaborate on various project.",
      technologies: "ReactJS | Firebase ",
      link: "https://project-management-29080.web.app/",
      github: "",
    },
    {
      id: 3,
      title: "Student Mangement",
      img: IMG2,
      description: "Application that allows user to manage data related to students.",
      technologies: "ReactJS | Firebase ",
      link: "https://student-portal-dde8a.web.app/",
      github: "",
    },
    {
      id: 4,
      title: "Startup Landing Page",
      img: IMG3,
      description:
        "A dedicated, standalone web page built for specific campaigns and target audiences.",
      technologies: "ReactJs",
      link: "https://earthly-sustainable.netlify.app/",
      github: "",
    },
    {
      id: 5,
      title: "Fashion Ecommerce website",
      img: IMG5,
      description:
        "Online Shopping Site for Fashion & Lifestyle",
      technologies: "Html | CSS | Javascript",
      link: "https://fashionbeginhere.netlify.app",
      github: "",
    },
  
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              {/* <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a> */}
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
