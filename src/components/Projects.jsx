import React from "react";
import { Tab } from "react-bootstrap";
import { Container, Row, Col, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
function Projects() {
  const projects = [
    {
      title: "Social Networking Website",
      description: "Front end and backend design",
      imgUrl: projImg1,
    },
    {
      title: "Guess Number game",
      description: "Javascript game",
      imgUrl: projImg2,
    },
    {
      title: "Birthday Reminder",
      description: "Basic birthday remider app using react",
      imgUrl: projImg3,
    },
    {
      title: "Online Store",
      description: "Amazon clone using react and redux",
      imgUrl: projImg1,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
              numquam, temporibus architecto dolores eaque deleniti harum
              provident, velit qui cum sed! Sunt adipisci ipsam minus magni
              numquam deserunt sit placeat!
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="secont">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
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
                        />
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="secont">Lorem Lumsum</Tab.Pane>
                <Tab.Pane eventKey="third">Loreasdm Lumsum</Tab.Pane>
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
