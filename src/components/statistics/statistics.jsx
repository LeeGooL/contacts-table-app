import React from "react";

import { Row, Col, Card } from "antd";

import { NATIONALITIES_HUMAN_NAME } from "../../constants/nationalities";

import "./statistics.scss";

const Statistics = ({ usersData }) => {
  const collectionSize = usersData.length;
  const malesCount = usersData.reduce((acc, user) => {
    if (user.gender === "male") {
      acc++;
    }

    return acc;
  }, 0);
  const femalesCount = usersData.reduce((acc, user) => {
    if (user.gender === "female") {
      acc++;
    }

    return acc;
  }, 0);
  const indeterminateCount = usersData.reduce((acc, user) => {
    if (user.gender !== "male" && user.gender !== "female") {
      acc++;
    }

    return acc;
  }, 0);
  const predominantGender =
    femalesCount > malesCount ? "Female predominate" : "Man predominate";
  const nationalitiesCount = usersData.reduce((acc, user) => {
    if (NATIONALITIES_HUMAN_NAME[user.nat][0] in acc) {
      acc[NATIONALITIES_HUMAN_NAME[user.nat][0]]++;
    } else {
      acc[NATIONALITIES_HUMAN_NAME[user.nat][0]] = 0;
    }

    return acc;
  }, {});

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
          <span className="statistics__col-count">{collectionSize}</span>
        </Col>

        <Col className="statistics__col">
          <span className="statistics__col-title">Males</span>
          <span className="statistics__col-count">{malesCount}</span>
        </Col>

        <Col className="statistics__col">
          <span className="statistics__col-title">Females</span>
          <span className="statistics__col-count">{femalesCount}</span>
        </Col>

        <Col className="statistics__col">
          <span className="statistics__col-title">Indeterminate</span>
          <span className="statistics__col-count">{indeterminateCount}</span>
        </Col>
      </Row>

      <Row className="statistics__row">
        <Col className="statistics__col-predominate" offset={2}>
          {predominantGender}
        </Col>
      </Row>

      <Row className="statistics__row nationalities">
        <Col className="statistics__col-title">Nationalities</Col>
      </Row>

      <Row className="statistics__row-nationalities">
        {Object.entries(nationalitiesCount).map((nat) => {
          return (
            <Col className="statistics__nationality">
              <span className="statistic__nationality-name">{nat[0]}:</span>
              <span className="statistics__nationality-count">
                {" "}
                {nat[1]} contact
              </span>
            </Col>
          );
        })}
      </Row>
    </Card>
  );
};

export default Statistics;
