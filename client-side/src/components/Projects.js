import React from "react";
import { Container, Row, Col, Tab, Carousel } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import { useQuery } from "@apollo/client";
import { GET_ALL_BLOGS } from "../gqloperations/queries";

export const Projects = ({ activeTab }) => {
  const { loading, error, data: blogdata } = useQuery(GET_ALL_BLOGS);

  // Check if data is still loading or if there's an error
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Check if blogdata or blogs is undefined
  const extractedArray = blogdata?.blogs || [];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>What our customers say</h2>
                  <p>
                  At Dandy Tints, customer satisfaction is our top priority. We take great pride in providing exceptional service and high-quality products to each and every one of our clients. But don't just take our word for it—here's what some of our satisfied customers have to say about their experience with us:
                  </p>
                  <Tab.Container id="projects-tabs" activeKey={activeTab}>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Carousel>
                          {Array(Math.ceil(extractedArray.length / 2))
                            .fill()
                            .map((_, index) => (
                              <Carousel.Item key={index}>
                                <Row>
                                  {extractedArray
                                    .slice(index * 2, index * 2 + 2)
                                    .map((project, idx) => (
                                      
                                        <ProjectCard
                                          title={project.content}
                                          imgUrl={project.image}
                                        />
                                    ))}
                                </Row>
                              </Carousel.Item>
                            ))}
                        </Carousel>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />
    </section>
  );
};