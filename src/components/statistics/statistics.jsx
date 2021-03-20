import React from "react";

import { Row, Col, Card } from "antd";

import "./statistics.scss";

const Statistics = () => {
  return (
    <Card className="statistics">
      <Row span={24}>
        <Col>
          <h2>Statistics</h2>
        </Col>
      </Row>

      <Row span={24}>
        <Col className="statistics__col">
          <span className="statistics__col-title">Collection size</span>
          <span className="statistics__col-count">12</span>
        </Col>

        <Col className="statistics__col">
          <span className="statistics__col-title">Males</span>
          <span className="statistics__col-count">8</span>
        </Col>

        <Col className="statistics__col">
          <span className="statistics__col-title">Females</span>
          <span className="statistics__col-count">4</span>
        </Col>

        <Col className="statistics__col">
          <span className="statistics__col-title">Indeterminate</span>
          <span className="statistics__col-count">0</span>
        </Col>
      </Row>

      <Row className="statistics__row">
        <Col className="statistics__col-predominate" offset={2}>
          Man predominate
        </Col>
      </Row>

      <Row className="statistics__row nationalities">
        <Col className="statistics__col-title">Nationalities</Col>
      </Row>

      <Row className="statistics__row-nationalities">
        <Col className="statistics__nationality">
          <span className="statistic__nationality-name">New Zealander:</span>
          <span className="statistics__nationality-count"> {1} contact</span>
        </Col>

        <Col className="statistics__nationality">
          <span className="statistic__nationality-name">New Zealander:</span>
          <span className="statistics__nationality-count"> {1} contact</span>
        </Col>

        <Col className="statistics__nationality">
          <span className="statistic__nationality-name">New Zealander:</span>
          <span className="statistics__nationality-count"> {1} contact</span>
        </Col>

        <Col className="statistics__nationality">
          <span className="statistic__nationality-name">New Zealander:</span>
          <span className="statistics__nationality-count"> {1} contact</span>
        </Col>

        <Col className="statistics__nationality">
          <span className="statistic__nationality-name">New Zealander:</span>
          <span className="statistics__nationality-count"> {1} contact</span>
        </Col>

        <Col className="statistics__nationality">
          <span className="statistic__nationality-name">New Zealander:</span>
          <span className="statistics__nationality-count"> {1} contact</span>
        </Col>

        <Col className="statistics__nationality">
          <span className="statistic__nationality-name">New Zealander:</span>
          <span className="statistics__nationality-count"> {1} contact</span>
        </Col>

        <Col className="statistics__nationality">
          <span className="statistic__nationality-name">New Zealander:</span>
          <span className="statistics__nationality-count"> {1} contact</span>
        </Col>

        <Col className="statistics__nationality">
          <span className="statistic__nationality-name">New Zealander:</span>
          <span className="statistics__nationality-count"> {1} contact</span>
        </Col>
      </Row>
    </Card>
  );
};

export default Statistics;
