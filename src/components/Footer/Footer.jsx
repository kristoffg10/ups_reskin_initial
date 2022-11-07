import React from "react";
import { Container, Row, Col } from "reactstrap";

import "../../styles/footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="mt-8">
        <Col lg="3" md="3">
            <p className="copyright__text">
            © Unified Products & Services 2022 
            </p>
          </Col>
          <Col lg="6" md="6">
            <center>
              <div className="copyright__text">
              <p className="copyright__text">
                <Link to="" className="footer_links">
                  <p>Our Website</p>
                </Link>
                <Link to="" className="footer_links">
                  <p>Contact Us</p>
                </Link>
                <Link to="" className="footer_links">
                  <p>Help</p>
                </Link>
                <Link to="" className="footer_links">
                  <p>Privacy Policy</p>
                </Link>
                <Link to="" className="footer_links">
                  <p>Terms & Condition</p>
                </Link>
                <Link to="" className="footer_links">
                  <p>Android App</p>
                </Link>
                <Link to="" className="footer_links">
                  <p>IOS App</p>
                </Link>
           
              </p>
              </div>
            </center>
          </Col>
          <Col lg="3" md="3">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <span>
                {" "}
                <Link to="https://www.facebook.com/">
                  <i class="ri-facebook-line"></i>
                </Link>{" "}
              </span>

              <span>
                {" "}
                <Link to="https://www.linkedin.com/">
                  <i class="ri-linkedin-line"></i>
                </Link>{" "}
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
