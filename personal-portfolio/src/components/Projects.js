import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/PG-airlines.png";
import projImg2 from "../assets/img/Videogames-PI.png";
// import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/SerbyLanding.png";
import projImg5 from "../assets/img/erthosLanding.png";
import projImg6 from "../assets/img/daviviendaLanding.png";
import projImg7 from "../assets/img/carshu-picture.png";
import projImg8 from "../assets/img/promptopia-picture.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects1 = [
    //Project in Page 1
    {
      title: "Airlines E-commerce",
      description: "Tickets Commerce, Roles & Development",
      imgUrl: projImg1,
      url: "https://pg-airlines.vercel.app/",
    },
    {
      title: "Erthos",
      description: "NFTs, Design & Development",
      imgUrl: projImg5,
      url: "https://erthos.vercel.app/",
    },
    {
      title: "CarsHub",
      description: "Cars & Design",
      imgUrl: projImg7,
      url: "https://carshub-next.vercel.app/",
    },
    {
      title: "Promptopia",
      description: "AI, Ideas & Creative",
      imgUrl: projImg8,
      url: "https://promptopia-next-test.vercel.app/",
    },
    {
      title: "Serby",
      description: "Commerces, Vehicles & others",
      imgUrl: projImg4,
      url: "https://serby-fronted-qa.vercel.app/",
    },
    {
      title: "Davivienda",
      description: "Bank, Design & Development",
      imgUrl: projImg6,
      // url: "https://pi-soy-henry-kappa.vercel.app/"
    },
  ];

  const projects2 = [
    {
      title: "Videogames App",
      description: "Videogames Info, Design & Development",
      imgUrl: projImg2,
      url: "https://pi-soy-henry-kappa.vercel.app/",
    },
  ];

  return (
    <section className="project" id="project">
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
                  <h2>Projects</h2>
                  <p>
                    These are the projects I have done so far. By clicking on
                    them you can enter the pages of each one.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Other projects will appear here soon</p>
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
        alt="charp"
      ></img>
    </section>
  );
};
