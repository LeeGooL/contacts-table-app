import React, { useState } from "react";
import axios from "axios";

import { Row, Col, Button, Tooltip, Spin } from "antd";
import { ReloadOutlined } from "@ant-design/icons";

import { Filters, ContactsTable, Statistics } from "../";

import "./contacts.scss";

const Contacts = () => {
  const [usersData, setUsersData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  console.log(usersData);

  function getUsers() {
    axios
      .get(`https://randomuser.me/api/?results=100`)
      .then(({ data: { results } }) => {
        setLoaded(true);
        setUsersData(results);
      })
      .catch(() => {
        setError(true);
      });
  }

  React.useEffect(() => {
    getUsers();
  }, []);

  const onClickButton = () => {
    getUsers();
  };

  return (
    <div className="contacts">
      <Row className="contacts__row">
        <Col span={12}>
          <h1 className="contacts__title">Contacts</h1>
        </Col>

        <Col className="contacts__col" span={12}>
          <Tooltip className="contacts__reload" title="update table data">
            <Button
              type="dashed"
              shape="circle"
              icon={<ReloadOutlined />}
              onClick={onClickButton}
            />
          </Tooltip>
        </Col>
      </Row>

      <Filters />

      {error ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 30,
            textAlign: "center",
            marginBottom: 30,
          }}
        >
          Failed to load user data. <br />
          Please try to reload the page or come back later
        </div>
      ) : loaded ? (
        <ContactsTable users={usersData} />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <Spin />
        </div>
      )}

      <Statistics usersData={usersData} />
    </div>
  );
};

export default Contacts;
