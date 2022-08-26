import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import pdf from "../assets/CV.pdf"
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";


export const Resume = () => {
  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              If you want to check my Resume please make click in download
              <br></br>
            </h3>

          </Col>
          <Col md={6} xl={7}>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
              class="btnPdf"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px", marginTop: "30px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
