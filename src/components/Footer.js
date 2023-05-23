import { Container, Row, Col } from "react-bootstrap";
import linkedinIcon from "../assets/img/nav-icon1.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} className="text-center pt-md-5">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/marjorie-arsolon-27b695b9/"><img src={linkedinIcon} alt="Icon" /></a>
            </div>
            <p>Thank you for your attention</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
