import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./Mailchimp";
import logo from "../assets/img/logo.svg"
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center" >
                    <MailchimpForm />
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon-bar">
                            <a href='http://www.linkedin.com/in/ebenezer-ojo-ba11ab222'><img src={navIcon1} alt="LinkedIn" /></a>
                            <a href='https://www.facebook.com/ebenezer.ojo.7737?mibextid=YMEMSu'><img src={navIcon2} alt="Facebook" /></a>
                            <a href='https://www.instagram.com/e__benn'><img src={navIcon3} alt="Instagram" /></a>
                        </div>
                        <p>CopyRight 2024. All Right Reserved by Ebenn </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}