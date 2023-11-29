import { Col, Row } from "react-bootstrap";
import pdfEs from "../assets/CV Full Stack Web Developer Cesar.pdf";
import Button from "react-bootstrap/Button";
import { IoMdDownload } from "react-icons/io";
import { useEffect, useState } from "react";

export const Resume = () => {
  const [spanish, setSpanish] = useState(true);
  const [english, setEnglish] = useState(false);

  useEffect(()=>{
    console.log(spanish,"spanish")
    console.log(english,"english")
  },[spanish])

  const handleSpanish = () =>{
    setSpanish(true);
    setEnglish(false);
  }
  const handleEnglish = () =>{
    setSpanish(false);
    setEnglish(true);
  }
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
              <div style={{ width: "100%", display:"flex", justifyContent:"center",gap:"5%" }}>
                <button className={spanish ? "btnLanguageOn" : "btnLanguageOff"} onClick={handleSpanish}>ES</button>
                <button className={english ? "btnLanguageOn" : "btnLanguageOff"} onClick={handleEnglish}>EN</button>
              </div>

              {spanish ? (  <Button
                // class="btnPdf"
                href={pdfEs}
                target="_blank"
                style={{
                  maxWidth: "250px",
                  marginTop: "3%",
                  backgroundColor: "black",
                  border: "2px solid black",
                  borderRadius: "5px",
                  color: "white",
                  fontWeight: "bolder",
                  transition: "all ease .5s",
                  // transition: 'transform 0.3s, background-color 0.3s, color 0.3s',
                }}
                className="btnPdfDownload"
              >
                <IoMdDownload />
                &nbsp;Descargar CV
              </Button>):(  <Button
                // class="btnPdf"
                href={pdfEs}
                target="_blank"
                style={{
                  maxWidth: "250px",
                  marginTop: "3%",
                  backgroundColor: "black",
                  border: "2px solid black",
                  borderRadius: "5px",
                  color: "white",
                  fontWeight: "bolder",
                  transition: "all ease .5s",
                  // transition: 'transform 0.3s, background-color 0.3s, color 0.3s',
                }}
                className="btnPdfDownload"
              >
                <IoMdDownload />
                &nbsp;Download CV
              </Button>)}
            
            </Row>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
