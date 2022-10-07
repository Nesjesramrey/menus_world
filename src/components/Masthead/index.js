import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";

import DeviceMockup from "../DeviceMockup";
import "./style.css";

const propTypes = {
  text: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  downloadLink: PropTypes.string.isRequired,
  demoScreen: PropTypes.string.isRequired,
};

/**
 * The masthead for the home page
 */
const Masthead = ({ text, buttonLabel, downloadLink, demoScreen }) => (
  <header className="masthead">
    <Container className="h-100">
      <Row className="h-100">
        <Col lg="7" xs="12" className="my-auto">
          <div className="header-content mx-auto">
            <h1 className="mb-5">{text}</h1>
            <a
              href="/restaurants"
              className="btn text-dark btn-outline btn-xl btn-masthead"
            >
              {buttonLabel}
            </a>
            <br></br>
          </div>
        </Col>
        <Col lg="5" xs="12" className="my-auto">
          <DeviceMockup device="myDevice" orientation="portrait" color="white">
            <img src={demoScreen} className="img-fluid" alt="" />
          </DeviceMockup>
        </Col>
      </Row>
    </Container>
  </header>
);

Masthead.propTypes = propTypes;

export default Masthead;
