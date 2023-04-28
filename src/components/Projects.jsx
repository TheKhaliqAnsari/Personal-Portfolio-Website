import React from "react";
import { Tab } from "react-bootstrap";
import { Container, Row, Col, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/qkart.png";
import projImg2 from "../assets/img/xflix.png";
import projImg3 from "../assets/img/qtrip.png";
import projImg4 from "../assets/img/xboard.png"
function Projects() {
  const projects = [
    {
      title: "Qkart Ecommerce",
      description: "Front end and backend design",
      imgUrl: projImg1,
      link: "https://qkart-fastest-ecom.netlify.app/",
    },
    {
      title: "Xflix Video Streaming",
      description: "Javascript game",
      imgUrl: projImg2,
      link: 'https://xflix-video-sharing-platform.netlify.app/',
    },
    {
      title: "Xboard New App",
      description: "Basic birthday remider app using react",
      imgUrl: projImg3,
      link: 'https://xboard-news-of-the-day.netlify.app/'
    },
    {
      title: "Qtrip Tour planner",
      description: "Amazon clone using react and redux",
      imgUrl: projImg4,
      link: "https://qtrip-airbnb-dynamic.netlify.app"
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <figure>
                <q>
                Every project is an opportunity to learn, to figure out problems and challenges, to invent and reinvent.
                </q>
                <figcaption className="text-right">- David Rockwell </figcaption>
              </figure>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="mb-4" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="secont">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}
                          onClick={() => window.location.href=project.link}
                        />
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="secont">Working on it...</Tab.Pane>
                <Tab.Pane eventKey="third">Working on it...</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt='some background details'></img>
    </section>
  );
}

export default Projects;
