import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";

import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

function Skill() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <figure>
                <q>
                All skills are perfected through the process of failure. Embrace loss as a necessary part of improvement.
                </q>
                <figcaption className="text-right">- Jerry Lynch </figcaption>
              </figure>
              {/* <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis voluptas inventore minima <br></br> officiis ab officia
                praesentium natus expedita cum optio, aperiam maiores hic! Quod
                odit excepturi, placeat assumenda dolore doloribus.
              </p> */}
              <Carousel
                responsive={responsive}
                infinete={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="webdevelopment" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Leetcode-detail" />
                  <h5>Data Structures & Algorithms</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Linux-detail" />
                  <h5>Javascript</h5>
                </div>

                <div className="item">
                  <img src={meter3} alt="Hacking Detail" />
                  <h5>React Js</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="Leetcode-detail" />
                  <h5>Redux</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="Leetcode-detail" />
                  <h5>Git</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="Leetcode-detail" />
                  <h5>SQL</h5>
                </div>

                <div className="item">
                  <img src={meter1} alt="Leetcode-detail" />
                  <h5>Linux</h5>
                </div>


              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>

      <img
        className="background-image-left"
        src={colorSharp}
        alt="background details"
      />
    </section>
  );
}

export default Skill;
