import { Col } from "react-bootstrap";
import s from "./styles/ProjectCard.module.css";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a className={s.link} href={url} target="_blank" rel="noreferrer">
        <div className="proj-imgbx">
          <img className={s.img} src={imgUrl} alt="Project" />
          <div className="proj-txtx">
            <h4 className={s.title}>{title}</h4>
            <span className={s.title}>{description}</span> 
          </div>
        </div>
      </a>
    </Col>
  );
};
