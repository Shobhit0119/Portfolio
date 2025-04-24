import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/realestate.png";
import projImg2 from "../assets/img/nft.png";
import projImg3 from "../assets/img/login page image Background Removed.png";
import projImg4 from "../assets/img/classification.png";
import projImg5 from "../assets/img/prediction.png";
import projImg6 from "../assets/img/web3shop.png";
import projImg7 from "../assets/img/dexx.png";





import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Job Portal Application",
      description: "Job portal with advanced features",
      imgUrl: projImg1,
      repoUrl: "https://github.com/Shobhit0119/Clone_naukri.com"
    },
    {
      title: "Sentiment Analyser",
      description: "Natural language sentiment detection model",
      imgUrl: projImg2,
      repoUrl: "https://github.com/Shobhit0119/Sentiment-Analysis"
    },
    {
      title: "IntelliSQR_login_frontend_backend",
      description: "Frontend-backend login page integration",
      imgUrl: projImg3,
      repoUrl: "https://github.com/Shobhit0119/IntelliSQR_login_frontend_backend"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Check out my awesome Projects! From intelligent interfaces to smart systems, explore my full-stack solutions in web, AI, and beyond. Dive into the code and explore them on my GitHub</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          <ProjectCard
                            title="Iris-Classification"
                            description="Iris data machine learning model"
                            imgUrl={projImg4}
                            repoUrl="https://github.com/Shobhit1901/Iris-Classification"
                          />
                          <ProjectCard
                            title="Wine_quality_prediction"
                            description="Predicting wine quality using ML."
                            imgUrl={projImg5}
                            repoUrl="https://github.com/Shobhit0119/Wine_quality_prediction"
                          />
                          <ProjectCard
                            title="House-Price-Prediction"
                            description="Housing price estimator using data"
                            imgUrl={projImg6}
                            repoUrl="https://github.com/Shobhit0119/House-Price-Prediction"
                          />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          <ProjectCard
                            title="Web Scrapping Automation"
                            description="Efficient data extraction via backend scraping automation."
                            imgUrl={projImg7}
                            repoUrl="https://github.com/Shobhit1901/web_scraping"
                          />
                          
                            
                            
                            
                            
                          
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background Design" />
    </section>
  );
}
