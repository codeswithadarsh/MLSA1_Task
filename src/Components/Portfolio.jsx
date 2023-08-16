/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/webdesign.jpg";

const imageAltText = "Web Design and develop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Advanced Calculator Website",
    description:
      "I have created a Advanced Calculator with Dark Mode Support. Anyone can use this calculator.",
    url: "https://codeswithadarsh.github.io/advanced-calculator/",
  },
  {
    title: "Advanced Portfolio web",
    description:
      "I have also created an Advanced Portfolio for myself. I have added my address, experiences, School, etc.",
    url: "https://codeswithadarsh.github.io/CodSoft-Level-3-Portfolio/",
  },
  {
    title: "Flight Landing Page",
    description:
      "This Landing Page belongs oto the Flight Booking Management. It is created with HTML, CSS.",
    url: "https://codeswithadarsh.github.io/Landing-Page-CodSoft/",
  },
  {
    title: "A Simple Blog Web",
    description:
      "In the Accio Contest, I have created a Simple Blog using the HTML and CSS.",
    url: "https://codeswithadarsh.github.io/AccioContest-Aug1/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
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
