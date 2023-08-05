import "./portfolio.css";

import IMG1 from "../../assets/credenz.png";
import IMG2 from "../../assets/sm.jpg";
import IMG3 from "../../assets/earthly.png";
import IMG4 from "../../assets/pm.jpg";
import IMG5 from "../../assets/web.png";
import IMG6 from "../../assets/Project4.jpg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    { 
      id: 1,
      title: "Credenz'23",
      img: IMG1,
      description:
        "An educational website is a huge interactive platform to present various information for people.",
      technologies: "React Js | Django",
      link: " https://credenz.in",
      github: "",
    },
    {
      id: 2,
      title: "Project Mangement",
      img: IMG4,
      description:
        "The COVID Tracking Project collects and publishes the most complete testing data available for all areas of the world.",
      technologies: "React | Redux",
      link: "https://project-management-29080.web.app/",
      github: "",
    },
    {
      id: 3,
      title: "Student Mangement",
      img: IMG2,
      description: "This site is a kind of social media platform. You can register and share your posts.",
      technologies: "React | Redux",
      link: "https://student-portal-dde8a.web.app/",
      github: "",
    },
    {
      id: 4,
      title: "Startup Landing Page",
      img: IMG3,
      description:
        "A dedicated, standalone web page built for specific campaigns and target audiences.",
      technologies: "Html | CSS | JavaScript | Next Js",
      link: "https://earthly-sustainable.netlify.app/",
      github: "",
    },
    {
      id: 5,
      title: "Fashion Ecommerce website",
      img: IMG5,
      description:
        "For when you need a fast funny joke, here are some short jokes to get anyone giggling.",
      technologies: "Html | Styled-components | Typescript",
      link: "https://fashionbeginhere.netlify.app",
      github: "",
    },
    // {
    //   id: 6,
    //   title: "Fs Poster Website",
    //   img: IMG6,
    //   description:
    //     "Real-world group project which is still in progress and will provide educational platform for future young developers",
    //   technologies: "Html | Scss | Javascript",
    //   link: "https://fs-poster-project.vercel.app/",
    //   github: "",
    // },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

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
