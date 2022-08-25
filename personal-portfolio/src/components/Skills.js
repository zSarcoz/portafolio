import react from "../assets/img/react-logo.png";
import css from "../assets/img/css-logo.png";
import redux from "../assets/img/redux-logo.png";
import js from "../assets/img/javascript-logo.png";
import node from "../assets/img/node-logo.png";
import git from "../assets/img/git-logo.png";
import sequelize from "../assets/img/sequelize.png";
import sql from "../assets/img/sql-logo.png";
import postgres from "../assets/img/postgres.png";
import bootstrap from "../assets/img/bootstrap.png";
import mui from "../assets/img/mui.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Most of my skills I learned at SoyHenry to become a Full Stack developer.<br></br> I handle both back end and front end but I am specializing more in front end.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={js} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={redux} alt="Image" />
                                <h5>Redux</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={mui} alt="Image" />
                                <h5>Material UI</h5>
                            </div>
                            <div className="item">
                                <img src={node} alt="Image" />
                                <h5>NodeJS</h5>
                            </div>
                            <div className="item">
                                <img src={sequelize} alt="Image" />
                                <h5>Sequelize</h5>
                            </div>
                            <div className="item">
                                <img src={sql} alt="Image" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={postgres} alt="Image" />
                                <h5>PostgresSQL</h5>
                            </div>
                            <div className="item">
                                <img src={git} alt="Image" />
                                <h5>Git</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Imge" />
    </section>
  )
}
