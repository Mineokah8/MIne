import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const spotlightProjects = {
      "Alpha Tv": {
        title: "Alpha. Tv",
        desc:
          "A Christian Content Streaming Service, with a Next.js front-end and a .Net back-end. It features a recommendation system that uses collaborative filtering to suggest content to users based on their watch history.",
        techStack: "Next.js, .Net, SQL",
        link: "https://myalphatv.com/",
        open: "https://myalphatv.com/",
        image: "/assets/alpha.png"
      },
      "CS-DON": {
        title: "CS-DON Website",
        desc:
          "A Next.js website for a Non-Govermental organization.",
        techStack: "JAVASCRIPT (Next.js)",
        link: "https://csdon.org/",
        open: "https://csdon.org/",
        image: "/assets/cdson.png"
      },
      "House Findr": {
        title: "House Findr",
        desc:
          "A real-time house listing mobile/web application that allows users to search for houses in Lagos based on their preferences and receive instant updates on new listings.",
        techStack: "NODE.JS (SOCKET.IO), REACT.JS/ REACT Native, MONGODB",
        link: "housefindr.vercel.app",
        open: "housefindr.vercel.app",
        image: "/assets/housefindr.png"
      },
      "Mandy's Eats Hub": {
        title: "Mandy's Eats Hub",
        desc:
          "A food delivery application that allows users to order from their favorite  restaurant and have their meals delivered to their doorstep.",
        techStack: "NODE.JS (EXPRESS.JS)",
        link: "mandys-eats-hub.vercel.app",
        open: "mandys-eats-hub.vercel.app",
        image: "/assets/mandy.png"
      }
    };
    const projects = {
      "Alpha Tv": {
        desc:
          "A Christian Content Streaming Service, with a Next.js front-end and a .Net back-end. It features a recommendation system that uses collaborative filtering to suggest content to users based on their watch history.",
        techStack: "Next.js, .Net,  SQL",
        link: "https://myalphatv.com/",
        open: "https://myalphatv.com/"
      },
      "Cleon Time": {
        desc:
          "CleonTime is a specialized, web-based claims processing portal developed by Whyte Cleon Limited as part of their comprehensive CleonHR suite.",
        techStack: "Javascript",
        link: "https://cleontime.cleonhrtest.com/",
        open: "CleonTime is a specialized, web-based claims processing portal developed by Whyte Cleon Limited as part of their comprehensive CleonHR suite."
      },
      "Distributed Logging and Monitoring System": {
        desc:
          "A system that establishes an ORM connection to a Prisma client in order to communicate logs from microservices.",
        techStack: "Node.js (Express.js), React.js, PostgreSQL",
        link:
          ""
      },
      
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ pet projects</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
